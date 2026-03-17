# v4
Node.js with node:http in alpine

### build
cd ~/my_docker/nodejs/src/v4
docker build -t nodejs:v4 .

### run
docker run -d --rm --name nodejs -p 80:3000 nodejs:v4

### access the image as root
docker run -it nodejs:v4 /bin/sh

### access the container as root
docker container ls --all
docker exec -u root -it CONTAINER-ID sh

### play
curl -I http://localhost
curl http://localhost
