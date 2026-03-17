# v16
nginx http alpine with node.js (/app) running with pm2

### build
cd ~/my_docker/nginx/src/v16
docker build --no-cache -t nginx:v16 .

### run
docker run -d --rm --name nginx.v16 -p 80:80 nginx:v16

### access the image as root
docker run -it nginx:v16 /bin/sh

### access the container as root
docker container ls
docker exec -u root -it CONTAINER_ID /bin/sh
tail -f -n 1000 /var/log/nginx/error.log
tail -f -n 1000 /var/log/nginx/access.log

# play
curl -I http:/172.16.128.135
curl -I http:/172.16.128.135/app

### access the container and execute
pm2 monit
pm2 start src/index.js
pm2 stop index

### run pm2 monit from client
docker exec -u root -it CONTAINER_ID pm2 monit

# TAG and PUSH nginx:v16 as marco27/simple-nginx:v1
docker tag nginx:v16 marco27/simple-nginx:v1
docker login
docker push marco27/simple-nginx:v1
