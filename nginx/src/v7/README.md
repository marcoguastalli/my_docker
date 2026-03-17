# v7
nginx under debian 10 buster http only OOTB

### build
cd ~/my_docker/nginx/src/v7
docker build --no-cache -t nginx-buster:v2 .

### run
docker run -d --rm --name nginx-buster -p 80:80 nginx-buster:v2

### access the container as root
docker container ls --all
docker exec -u root -it CONTAINER-ID /bin/bash

# play
curl -I http://localhost