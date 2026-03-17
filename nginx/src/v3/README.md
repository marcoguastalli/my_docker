# v3
nginx with nginx proxy and 1 nginx

### inspiring links
https://hub.docker.com/r/jwilder/nginx-proxy

### build
cd ~/my_docker/nginx/src/v3
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
curl http://marco27.net