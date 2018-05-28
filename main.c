#include <unistd.h>
#include <stdio.h>
#include <stdlib.h>
#include "mysql.h"

int main(int argc, char* argv[]){
	MYSQL *conn;
	conn = mysql_init(NULL);
	if (conn == NULL){
		printf("mysql_init failed!\n");
		return EXIT_FAILURE;
	}

	conn = mysql_real_connect(conn, "127.0.0.1", "root", "kjzyw325", "grafana",
	0, NULL, 0);

	if(conn){
		printf("Connection success!\n");
		//FILE* fp = NULL;
		while(1){
		    	//fp = fopen("memory_usage.txt", "r");
			int swap = rand()%100;
			int virt = rand()%100;
			float phy = rand()%100;
			//fscanf(fp, "%d%d%f", &swap, &virt, &phy);
			printf("%d %d %f\n",swap, virt, phy);
			//fclose(fp);	
			char str[100];
			sprintf(str, 
			"INSERT INTO random_data (date, value1, value2) VALUES ( NOW(), %d, %d)",
			(int) phy, virt);
			int res = mysql_query(conn, str);
		
			if (!res){
				printf("Inserted %lu rows", (unsigned long)mysql_affected_rows(conn));
			}
			else{
				fprintf(stderr, "Insert error %d: %s\n", mysql_errno(conn), 
				mysql_error(conn));
			}
			sleep(5);
		}
		
	}
	else{
		printf("Connection failed!\n");
	}

	mysql_close(conn);
	return 0;
}
