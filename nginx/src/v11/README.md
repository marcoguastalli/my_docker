# v11
nginx http alpine

### inspiring links
https://www.docker.com/blog/how-to-use-the-official-nginx-docker-image/

### build
cd ~/my_docker/nginx/src/v11
docker build --no-cache -t nginx:v11 .

### run
docker run -d --rm --name nginx.v11 -p 80:80 nginx:v11
docker run  --rm --name nginx.v11 -p 80:80 -v html:/usr/share/nginx/html nginx:v11

### access the image as root
docker run -it nginx:v11 /bin/sh

### access the container as root
docker container ls
docker exec -u root -it CONTAINER_ID /bin/sh
tail -f -n 1000 /var/log/nginx/error.log
tail -f -n 1000 /var/log/nginx/access.log

# play
curl -I http:/172.16.128.131
