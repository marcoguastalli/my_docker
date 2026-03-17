# v1
nodejs with express hello world

### build
cd ~/my_docker/nodejs/src/v1
docker build -t nodejs:v1 .

### run
docker run -d --rm --name nodejs -p 9000:9000 nodejs:v1

### access the container as root
docker container ls --all
docker exec -u root -it CONTAINER-ID /bin/bash

### play
http://localhost:9000