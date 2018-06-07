import mysql.connector
from datetime import date, datetime, timedelta

from datetime import date, datetime, timedelta



cnx =  mysql.connector.connect(user='root', password='kjzyw325',

                              host='localhost',

                              database='test')



curr = cnx.cursor()
<<<<<<< HEAD

# create two databases

# insert data

drop1 = ("DROP TABLE if EXISTS `departments` ")

drop2 = ("DROP TABLE if EXISTS `employees` ")

=======
# create two databases
# insert data
drop1 = ("DROP TABLE if EXISTS `departments` ")
drop2 = ("DROP TABLE if EXISTS `employees` ")
>>>>>>> fc2dfdfb6bda2781373a649751589b5ffaaeb4e5
table1 = (

    "CREATE TABLE `departments` ("

    "  `dept_no` char(4) NOT NULL,"

    "  `dept_name` varchar(40) NOT NULL,"
<<<<<<< HEAD

=======
    "  `date_my` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "
>>>>>>> fc2dfdfb6bda2781373a649751589b5ffaaeb4e5
    "  PRIMARY KEY (`dept_no`), UNIQUE KEY `dept_name` (`dept_name`)"

    ") ENGINE=InnoDB")

<<<<<<< HEAD


table2 = (

    "CREATE TABLE `employees` ("

=======
table2 = (
    "CREATE TABLE `employees` ("
>>>>>>> fc2dfdfb6bda2781373a649751589b5ffaaeb4e5
    "  `emp_no` int(11) NOT NULL AUTO_INCREMENT,"

    "  `birth_date` date NOT NULL,"

    "  `first_name` varchar(14) NOT NULL,"

    "  `last_name` varchar(16) NOT NULL,"

    "  `gender` enum('M','F') NOT NULL,"

    "  `hire_date` date NOT NULL,"
<<<<<<< HEAD

=======
    "  `date_my` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP, "
>>>>>>> fc2dfdfb6bda2781373a649751589b5ffaaeb4e5
    "  PRIMARY KEY (`emp_no`)"

    ") ENGINE=InnoDB")


<<<<<<< HEAD



insert1 = ("INSERT INTO departments"

            "(dept_no, dept_name)"

            "VALUES (%s, %s)")



data1 = {}

data1[0] = (0, 'one_dpt')

data1[1] = (1, 'two_dpt')

data1[2] = (2, 'three_dpt')

data1[3] = (3, 'four_dpt')

data1[4] = (4, 'five_dpt')



insert2 = ("INSERT INTO  employees"

        "(emp_no, birth_date, first_name, last_name, gender, hire_date) "

        "VALUES (%s, %s, %s, %s, %s, %s)")



data2 = {}

data2[0] = (10, date(1997, 6, 14), 'Tom', 'White', 'M', date(2019, 9, 1))

data2[1] = (11, date(2001, 2, 17), 'Davana', 'Sun', 'F', date(2023, 3, 1))



curr.execute(drop1)

curr.execute(drop2)

curr.execute(table1)

curr.execute(table2)



for item in data1:

    curr.execute(insert1, data1[item])



for each in data2:

    curr.execute(insert2, data2[each])





cnx.commit()

curr.close()

cnx.close()



SELECT
  UNIX_TIMESTAMP(birth_date) as time_sec,
  emp_no as value,
  'TEMPERATURE' as metric
 FROM employees
WHERE $__timeFilter(birth_date)
ORDER BY birth_date ASC
=======
insert1 = ("INSERT INTO departments"
            "(dept_no, dept_name)"
            "VALUES (%s, %s)")

data1 = {}
data1[0] = (0, 'one_dpt')
data1[1] = (1, 'two_dpt')
data1[2] = (2, 'three_dpt')
data1[3] = (3, 'four_dpt')
data1[4] = (4, 'five_dpt')

insert2 = ("INSERT INTO  employees"
        "(emp_no, birth_date, first_name, last_name, gender, hire_date) "
        "VALUES (%s, %s, %s, %s, %s, %s)")

data2 = {}
data2[0] = (10, date(2001, 5, 19), 'Tom', 'White', 'M', date(2019, 9, 1))
data2[1] = (11, date(2002, 5, 19), 'Davana', 'Sun', 'F', date(2023, 3, 1))

curr.execute(drop1)
curr.execute(drop2)
curr.execute(table1)
curr.execute(table2)

for item in data1:
    curr.execute(insert1, data1[item])

for each in data2:
    curr.execute(insert2, data2[each])


cnx.commit()
curr.close()
cnx.close()

>>>>>>> fc2dfdfb6bda2781373a649751589b5ffaaeb4e5
