#v2
default index.html apache2 inside ubuntu 20.04 using Docker

### build
cd apache2/src/v2
docker build -t apache2:v2 .

### run
docker run -d --rm --name apache2 -P apache2:v2
docker run -d --rm --name apache2 -p 8088:80 apache2:v2

### access the image as root
docker run -it apache2:v2 /bin/bash

### play from the host
curl -I HEAD http://localhost:8088
curl -X GET http://localhost:8088
