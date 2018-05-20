# grafana
summer research project

login database: mysql -u root -p
use python-mysql to execute

start grafana service:
sudo service grafana-server start

download influxdb
use dashboard from community
https://anomaly.io/install-collectd-on-debian-ubuntu/

&lt;Plugin "network"&gt;
    Server "myinfluxdb.com" "25826"
