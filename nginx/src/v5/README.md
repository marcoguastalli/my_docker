# v5
Nginx with nginx proxy and letsencrypt

### inspiring links
https://www.youtube.com/watch?v=S2YFqf4L7l8
https://hub.docker.com/r/jwilder/nginx-proxy
https://hub.docker.com/u/letsencrypt
https://hub.docker.com/r/jrcs/letsencrypt-nginx-proxy-companion

### build
cd ~/my_docker/nginx/src/v5
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
curl -I https://marco27.net
curl -I https://m27js.net