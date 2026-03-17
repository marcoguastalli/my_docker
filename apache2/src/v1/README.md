#v1
default apache2 inside ubuntu 20.04 using Docker

### build
cd apache2/src/v1
docker build -t apache2:v1 .

### run
docker run -d --rm --name apache2 -P apache2:v1
docker run -d --rm --name apache2 -p 8088:80 apache2:v1

### play from the host
curl -I HEAD http://localhost:8088
curl -X GET http://localhost:8088

### access the image as root
docker run -it apache2:v1 /bin/bash

### https://phoenixnap.com/kb/how-to-ssh-into-docker-container
docker attach apache2:v1

docker inspect -f "{{ .NetworkSettings.IPAddress }}" apache2
ssh 172.17.0.2
ping –c 3 172.17.0.2
