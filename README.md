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

## how to run
* start influxdb server
* start telegraf server
* start grafana server
* note: for ubuntu
```
sudo service xxx start/restart
```


## install toolbox for collectd-graphite-grafana
* https://www.unixmen.com/full-monitoring-system-graphite-collectd-statsd-part-1/
