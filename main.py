import mysql.connector

cnx =  mysql.connector.connect(user='root', password='kjzyw325',
                              host='localhost',
                              database='test')

curr = cnx.cursor()
table1 = (
    "CREATE TABLE `departments` ("
    "  `dept_no` char(4) NOT NULL,"
    "  `dept_name` varchar(40) NOT NULL,"
    "  PRIMARY KEY (`dept_no`), UNIQUE KEY `dept_name` (`dept_name`)"
    ") ENGINE=InnoDB")

curr.execute(table1)