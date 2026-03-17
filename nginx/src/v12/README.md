# v12
nginx http alpine with custom default.conf and 404 page

### inspiring links
https://www.docker.com/blog/how-to-use-the-official-nginx-docker-image/

### build
cd ~/my_docker/nginx/src/v12
docker build --no-cache -t nginx:v12 .

### run
docker run -d --rm --name nginx.v12 -p 80:80 nginx:v12

### access the image as root
docker run -it nginx:v12 /bin/sh

### access the container as root
docker container ls
docker exec -u root -it CONTAINER_ID /bin/sh
tail -f -n 1000 /var/log/nginx/error.log
tail -f -n 1000 /var/log/nginx/access.log

# play
curl -I http:/172.16.128.131
