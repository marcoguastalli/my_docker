# v13
nginx http alpine with node.js console log message

### build
cd ~/my_docker/nginx/src/v13
docker build --no-cache -t nginx:v13 .

### run
docker run -d --rm --name nginx.v13 -p 80:80 nginx:v13

### access the image as root
docker run -it nginx:v13 /bin/sh

### access the container as root
docker container ls
docker exec -u root -it CONTAINER_ID /bin/sh
tail -f -n 1000 /var/log/nginx/error.log
tail -f -n 1000 /var/log/nginx/access.log

# play
curl -I http:/172.16.128.131

### access the container and execute
`npm run start`
