# v1
Nginx with default site and marco27.net site

### build
cd nginx/src/v1
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
http://marco27.net/
http://marco27.net/index.html
