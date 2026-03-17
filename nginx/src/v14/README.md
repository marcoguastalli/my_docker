# v14
nginx http alpine with node.js console log message running with pm2

### build
cd ~/my_docker/nginx/src/v14
docker build --no-cache -t nginx:v14 .

### run
docker run -d --rm --name nginx.v14 -p 80:80 nginx:v14

### access the image as root
docker run -it nginx:v14 /bin/sh

### access the container as root
docker container ls
docker exec -u root -it CONTAINER_ID /bin/sh
tail -f -n 1000 /var/log/nginx/error.log
tail -f -n 1000 /var/log/nginx/access.log

# play
curl -I http:/172.16.128.131

### access the container and execute
pm2 monit
pm2 start src/index.js
pm2 stop index
