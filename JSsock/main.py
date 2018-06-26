import httplib

conn = httplib.HTTPConnection("127.0.0.1:8080")
conn.request("GET","/slab.html")
res = conn.getresponse()
print (res.status, res.read())