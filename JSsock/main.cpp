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
#include <sys/types.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>

using namespace std;

int main()
{
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
    addr.sin_port = htons(8080);
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

    if(send(s, "GET /slab.html HTTP/1.1\r\nHost: 127.0.0.1 \r\nConnection: close\r\n\r\n", 
        strlen("GET /slab.html HTTP/1.1\r\nHost: 127.0.0.1 \r\nConnection: close\r\n\r\n"), 0)==-1){
             cout<<"error send socket"<<endl;
        }
        else{
            cout<<"success send request"<<endl;
        }

    

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
}