# v2
Nginx with default site overlay

### build
cd nginx/src/v2
docker-compose up -d

### run
docker-compose start
docker-compose stop

### access the image as root
docker run -it nginx:1.19.8 /bin/bash

### access the container as root
docker container ls --all
docker exec -u root -it CONTAINER-ID /bin/bash
tail -n 500 -f /var/log/nginx/error.log
tail -n 500 -f /var/log/nginx/access.log

### play
http://localhost
