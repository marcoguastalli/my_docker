# v6
nginx under debian 10 buster with supervisor

# inspiring links
https://www.server-world.info/en/note?os=Debian_10&p=docker&f=4

### 1st time only
ssh-keygen -q -N "" -f .ssh/id_rsa_docker
then copy '~/.ssh/id_rsa_docker_pub 'it in ~/my_docker/nginx/src/v6/ssh

### build
cd ~/my_docker/nginx/src/v6
docker build --no-cache -t nginx-buster:v1 .

### run
docker run -d --rm --name nginx-buster -p 22:22 -p 80:80 nginx-buster:v1

### access the container as root
docker container ls --all
docker exec -u root -it   /bin/bash

# play
curl -I http://localhost