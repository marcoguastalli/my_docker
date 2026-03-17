# v2
nginx proxy with the http server that redirect to https

### build
cd ~/my_docker/nginx-proxy/v2
docker build --no-cache -t nginx-proxy:v2 .

### run
docker run -d --rm --name nginx-proxy.v2 -p 80:80 nginx-proxy:v2

### access the container as root
docker container ls
docker exec -u root -it CONTAINER_ID /bin/bash
tail -f -n 1000 /var/log/nginx/error.log
tail -f -n 1000 /var/log/nginx/access.log

# play
docker inspect CONTAINER_ID | grep "IPAddress"
curl -k -I https:/172.17.0.2`
curl -k -I https://thedebian