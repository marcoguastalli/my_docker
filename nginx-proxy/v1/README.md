# v1
nginx under Debian 10 buster

## create .htaccess file
cd ~/my_docker/nginx-proxy/v1/nginx
htpasswd -c .htpasswd minikube

## get certificates
cat .minikube/profiles/minikube/client.crt
cat .minikube/profiles/minikube/client.key

### build
cd ~/my_docker/nginx-proxy/v1/
docker build --no-cache -t nginx-proxy:v1 .

### run
docker run --rm --name nginx-proxy -p 80:80 nginx-proxy:v1

### access the image as root
docker run -it nginx-proxy:v1 /bin/bash

### access the container as root
docker container ls
docker exec -u root -it CONTAINER_ID /bin/bash
tail -f -n 1000 /var/log/nginx/error.log
tail -f -n 1000 /var/log/nginx/access.log

# play
docker inspect CONTAINER_ID | grep "IPAddress"
