# v9
nginx under debian 10 buster with http2

### build
cd ~/my_docker/nginx/src/v9
docker build --no-cache -t nginx:v9 .

### run
docker run -d --rm --name nginx.v9 -p 443:443 nginx:v9
docker run -d --rm --name nginx.v9 -p 0.0.0.0:443:443 nginx:v9

### access the container as root
docker container ls
docker exec -u root -it CONTAINER_ID /bin/bash
tail -f -n 1000 /var/log/nginx/error.log
tail -f -n 1000 /var/log/nginx/access.log

# play
curl -k -I https:/172.17.0.2
curl -k -I https://thedebian