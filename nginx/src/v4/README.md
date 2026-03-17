# v4
nginx with nginx proxy and 2 nginx

### inspiring links
https://hub.docker.com/r/jwilder/nginx-proxy

### build
cd ~/my_docker/nginx/src/v4
docker-compose up -d

### run
docker-compose start
docker-compose stop

### access the container as root
docker container ls --all
docker exec -u root -it CONTAINER-ID sh
tail -n 500 -f /var/log/nginx/access.log
tail -n 500 -f /var/log/nginx/error.log

### play
http://localhost is a 503
http://marco27.net
http://m27js.net