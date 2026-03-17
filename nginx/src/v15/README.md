# v15
nginx http alpine with node.js console log message running with pm2

### build
cd ~/my_docker/nginx/src/v15
docker build --no-cache -t nginx:v15 .

### run
docker run -d --rm --name nginx.v15 -p 80:80 -p 8080:8080 nginx:v15

### access the image as root
docker run -it nginx:v15 /bin/sh

### access the container as root
docker container ls
docker exec -u root -it CONTAINER_ID /bin/sh
tail -f -n 1000 /var/log/nginx/error.log
tail -f -n 1000 /var/log/nginx/access.log

# play
curl -I http:/172.16.128.135
curl -I http:/172.16.128.135:8080

### access the container and execute
pm2 monit
pm2 start src/index.js
pm2 stop index

### run pm2 monit from client
docker exec -u root -it CONTAINER_ID pm2 monit

# TAG and PUSH nginx:v15 as marco27/simple-nginx:v1
docker tag nginx:v15 marco27/simple-nginx:v1
docker login
docker push marco27/simple-nginx:v1
