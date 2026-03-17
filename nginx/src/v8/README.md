# v8
nginx under debian 10 buster http only marco27.net

### build
cd ~/my_docker/nginx/src/v8
docker build --no-cache -t nginx-buster:v3 .

### run
docker run -d --rm --name nginx-buster -p 80:80 nginx-buster:v3

### access the container as root
docker container ls --all
docker exec -u root -it   /bin/bash

# play
curl -I http://marco27.net
curl  http://marco27.net