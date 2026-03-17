# my_docker
some docker images

### a bit of knowledge
https://docs.docker.com/
https://docs.docker.com/engine/reference/builder/

### colima
brew services list
brew services start colima
brew services info colima
colima status
colima start --cpu 4 --memory 8
colima stop
docker system prune

### access the image as root
docker run -it <image-id> /bin/bash
docker run -it <image-id> /bin/sh

### access the container as root
docker exec -u root -it  <container-id> /bin/bash

### clean-up
docker container ls --all
docker stop <container-id>
docker rm <container-id>

docker image ls
docker rmi apache2:v1
docker rmi ubuntu
