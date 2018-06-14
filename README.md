# grafana
summer research project

* login database: ```mysql -u root -p```
* use python-mysql to execute

## install grafana
* http://docs.grafana.org/installation/debian/

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
sudo service mysql start
mysql -u root -p
```
* password: mysql

## infiniswap
* /var/lib/lxc
* /proj
* lxc-attach -n test1

## grafana plugins
* directory: /var/lib/grafana/plugins
* plugins website: https://github.com/jdbranham/grafana-diagram
* grafana plugin example: https://github.com/benthorner/grafana-plugin-example
* plugin example: https://github.com/CorpGlory/grafana-plugin-template-webpack

## self-study AngularJS
* constructor is used for initialization
* we can initialize variables in constructor
* use {{ctrl.variable}} in html for variable
* can also use ctrl.variable in expressions

## compile React
```
npm init -y
npm install --save-dev babel-cli
npm install --save-dev babel-preset-es2015 babel-preset-react
babel --presets es2015,react --watch src/ --out-dir dist
npm install -g http-server
http-server
npm install webpack react --save-dev
 node_modules/.bin/webpack index.jsx browser-bundle.js
 128.110.96.95:8080
```
