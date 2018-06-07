#include "master.h"

void connect_to_mysql()
{
    conn = mysql_init(NULL);
    if (conn == NULL){
        printf("mysql_init failed!\n");
        exit(EXIT_FAILURE);
    }
    conn = mysql_real_connect(conn, "127.0.0.1", "root", "mysql", "grafana",
                              0, NULL, 0);
    if (conn){
        printf("Connection success!\n");
        FILE *fp = NULL;
    }
    else{
        printf("Connection failed!\n");
    }
}


static int server_init()
{
    int sock = socket(AF_INET, SOCK_STREAM, 0);
    if (sock == -1){
        cerr << "cannot open stream socket!\n";
        exit(1);
    }
    int on = 1;
    setsockopt(sock, SOL_SOCKET, SO_REUSEADDR, &on, sizeof(on));
    //bind the port number to the socket
    struct sockaddr_in addr;
    memset(&addr, 0, sizeof(addr));
    addr.sin_family = AF_INET;
    addr.sin_addr.s_addr = htonl(INADDR_ANY);
    addr.sin_port = htons(hostport);
    bind(sock, (struct sockaddr *)&addr, sizeof(addr));
    socklen_t length = sizeof(addr);
    if (getsockname(sock, (struct sockaddr *)&addr, &length) == -1){
        exit(1);
    }
    //starting listen, with buffer set to 10
    listen(sock, 10);
    return sock;
}

static void process_data()
{
    while (true)
    {
        // calculate the total RAM, average speed and latency
        vector<request_msg> msgs;
        time_t t = time(0);
        t -= (process_interval + delay_time);
        infos.select_infos(t, &msgs);
        int total_RAM_used = 0, total_RAM_unused = 0, total_RAM_allocated = 0;
        int avg_pagein_speed = 0, avg_pageout_speed = 0;
        int avg_pagein_latency = 0, avg_pageout_latency = 0;
        unordered_set<int> ids;
        unordered_map<int, int> id_times;
        unordered_map<int, ram_t> id_average;
        if (!msgs.empty())
        {
            for (request_msg info : msgs)
            {
                avg_pagein_speed += info.pagein_speed;
                avg_pageout_speed += info.pageout_speed;
                avg_pagein_latency += info.pagein_latency;
                avg_pageout_latency += info.pageout_latency;
                if (ids.find(info.id) == ids.end())
                {
                    ids.insert(info.id);
                    id_times[info.id] = 1;
                    id_average[info.id] = info.ram;
                }
                else
                {
                    id_times[info.id]++;
                    id_average[info.id].used += info.ram.used;
                    id_average[info.id].unused += info.ram.unused;
                    id_average[info.id].allocated += info.ram.allocated;
                }
            }
            for (int id : ids)
            {
                id_average[id].used /= id_times[id];
                id_average[id].unused /= id_times[id];
                id_average[id].allocated /= id_times[id];
                total_RAM_used += id_average[id].used;
                total_RAM_unused += id_average[id].unused;
                total_RAM_allocated += id_average[id].allocated;
            }
            avg_pagein_speed /= msgs.size();
            avg_pageout_speed /= msgs.size();
            avg_pagein_latency /= msgs.size();
            avg_pageout_latency /= msgs.size();
        }
        tm *my_tm = localtime(&t);
        char timestamp[30];
        sprintf(timestamp, "%d-%d-%d %d:%d:%d", 1900 + my_tm->tm_year,
                my_tm->tm_mon, my_tm->tm_mday, my_tm->tm_hour, my_tm->tm_min, my_tm->tm_sec);

        cout << msgs.size() << endl;
        // put the data into mysql
        char str[200];
        sprintf(str,
                "INSERT INTO general_info (pagein_speed, pageout_speed, pagein_latency, pageout_latency, time, device_num, RAM_used, RAM_unused, RAM_allocated) VALUES (%d, %d, %d, %d, NOW(), %d, %d, %d, %d)",
                avg_pagein_speed, avg_pageout_speed, avg_pagein_latency, avg_pageout_latency,
                ids.size(), total_RAM_used, total_RAM_unused, total_RAM_allocated);
        //cout << str << endl;
        put_data_into_mysql(str);
        sleep(process_interval);
    }
}
