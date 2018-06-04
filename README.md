# grafana
summer research project

* login database: ```mysql -u root -p```
* use python-mysql to execute

## start grafana service:
```
sudo service grafana-server start
```

## download influxdb
* use dashboard from community
* https://anomaly.io/install-collectd-on-debian-ubuntu/

&lt;Plugin "network"&gt;
    Server "myinfluxdb.com" "25826"
  
## how to install toolbox for telegraf-influxdb-grafana
* use telegraf as database
* use influxdb to store data
* import dashboard from others
* monitor ubuntu host
* https://lkhill.com/telegraf-influx-grafana-network-stats/
* remove influxdb and reinstall https://www.howtoinstall.co/en/ubuntu/xenial/influxdb?action=remove

## how to run
* start influxdb server
```
sudo service influxdb start
```
* start telegraf server
```
sudo service telegraf start
```
* start grafana server
* note: for ubuntu
```
sudo service xxx start/restart
```


## install toolbox for collectd-graphite-grafana
* https://www.unixmen.com/full-monitoring-system-graphite-collectd-statsd-part-1/
* some configuration details to set up grafana with graphite
'''
https://www.linode.com/docs/uptime/monitoring/how-to-install-graphite-and-grafana-on-ubuntu-14-04/
'''

## install package for c-api mysql
* 
```
apt-get install libmysqlclient-dev 
```

## install mysql on cloudlab
```
sudo apt-get install mysql-server
sudo ufw allow mysql
```
