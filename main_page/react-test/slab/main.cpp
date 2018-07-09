#define _BSD_SOURCE
#include <iostream>
#include <ctype.h>
#include <cstring>
#include <stdlib.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <netdb.h>
#include <netinet/in.h>
#include <unistd.h>
#include <sstream>
#include <fstream>
#include <string>
#include <netinet/in.h>
#include <arpa/inet.h>

using namespace std;

int main()
{
    int sock = socket(AF_INET, SOCK_STREAM, 0);

    if (sock == -1)
    {
        cerr << "cannot open stream socket!\n";
        exit(1);
    }

    int on = 1;
    setsockopt(sock, SOL_SOCKET, SO_REUSEADDR, &on, sizeof(on));

    //bind the port number to the socket
    struct sockaddr_in addr;
    memset(&addr, 0, sizeof(addr));
    addr.sin_family = AF_INET;
    addr.sin_addr.s_addr = inet_addr("127.0.0.1");
    addr.sin_port = htons(1234);
    if (bind(sock, (struct sockaddr *)&addr, sizeof(addr)) < 0)
    {
        perror("bind failed. Error");
        return 1;
    }
    cout << "bind success" << endl;

    socklen_t length = sizeof(addr);
    if (getsockname(sock, (struct sockaddr *)&addr, &length) == -1)
    {
        exit(1);
    }

    //starting listen, with buffer set to 10
    listen(sock, 10);

    while (true)
    {
        cout << "accept a message" << endl;
        int msgsock = accept(sock, nullptr, nullptr);
        if (msgsock == -1)
        {
            cerr << "Error: accept socket connection\n";
        }
        else
        {
            char buf[1000];
            int i;
            for (i = 0; i < 1000; i++)
            {
                //Receive a single byte
                recv(msgsock, buf, 10, 0);
                //Could receive 0 byte, need to use msg_waitall
                // Stop receive nullterminator
                if (buf[i] == '\0')
                {
                    break;
                }
                cout<<buf[i];
            }
        }
    }
    close(sock);

    /*

    int s, error;
    struct sockaddr_in addr;

    if((s = socket(AF_INET,SOCK_STREAM,0))<0)
    {
        cout<<"Error 01: creating socket failed!\n";
        close(s);
        return 1;
    }

    struct hostent *host;
	host = gethostbyname("127.0.0.1");
    addr.sin_family = AF_INET;
    addr.sin_port = htons(1234);
    addr.sin_addr.s_addr = *((unsigned long*)host->h_addr);

    error = connect(s,(sockaddr*)&addr,sizeof(addr));
    if(error!=0)
    {
        cout<<"Error 02: conecting to server failed!\n";
        close(s);
        return 1;
    }
    else{
        cout<<"connect success"<<endl;
    }

    const char link[] = "127.0.0.1";

    
    char buffer[10000];
	int nDataLength;
	while ((nDataLength = recv(s, buffer, 10000, 0)) > 0){
		int i = 0;
		while (buffer[i] >= 32 || buffer[i] == '\n' || buffer[i] == '\r') {
			cout << buffer[i];
			i += 1;
		}
	}
	close(s);

	return 0;
    */
}