import requests
import json
with open ("dashboard/daemon_dashboard.json") as f:
  data = json.load(f)
content = {}
content['dashboard'] = data
content['folderId'] = 0
content['overwrite'] = False
message = json.dumps(content)
url = 'http://admin:admin@localhost:3000/api/dashboards/db'
headers = {"Content-Type": 'application/json','Accept': 'application/json','Authorization': 'Bearer eyJrIjoiT0tTcG1pUlY2RnVKZTFVaDFsNFZXdE9ZWmNrMkZYbk'}
response = requests.post(url,data=message,headers=headers)
print(response)
print(response.status_code)
print (response.text)

with open ("dashboard/bd_dashboard.json") as f:
  data = json.load(f)
content = {}
content['dashboard'] = data
content['folderId'] = 0
content['overwrite'] = False
message = json.dumps(content)
url = 'http://admin:admin@localhost:3000/api/dashboards/db'
headers = {"Content-Type": 'application/json','Accept': 'application/json','Authorization': 'Bearer eyJrIjoiT0tTcG1pUlY2RnVKZTFVaDFsNFZXdE9ZWmNrMkZYbk'}
response = requests.post(url,data=message,headers=headers)
print(response)
print(response.status_code)
print (response.text)


with open ("dashboard/main_dashboard.json") as f:
  data = json.load(f)
content = {}
content['dashboard'] = data
content['folderId'] = 0
content['overwrite'] = False
message = json.dumps(content)
url = 'http://admin:admin@localhost:3000/api/dashboards/db'
headers = {"Content-Type": 'application/json','Accept': 'application/json','Authorization': 'Bearer eyJrIjoiT0tTcG1pUlY2RnVKZTFVaDFsNFZXdE9ZWmNrMkZYbk'}
response = requests.post(url,data=message,headers=headers)
print(response)
print(response.status_code)
print (response.text)