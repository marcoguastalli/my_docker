# v2
nodejs with webpack server

### build
cd ~/my_docker/nodejs/src/v2
docker build -t nodejs:v2 .

### run
docker run -d --rm --name nodejs -p 9000:9000 nodejs:v2

### access the container as root
docker container ls --all
docker exec -u root -it CONTAINER-ID /bin/bash

### play
http://localhost:9000