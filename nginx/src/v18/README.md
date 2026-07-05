# v18
nginx https alpine

### build
- `cd ./nginx/src/v18`
- `docker build --no-cache -t nginx:v18 .`

### run
- `docker run -d --rm --name nginx.v18 -p 443:443 nginx:v18`

### access the image as root
- `docker run -it nginx:v18 /bin/sh`
- `cat /etc/alpine-release`

### access the container as root
- `docker container ls`
- `docker exec -u root -it CONTAINER_ID /bin/sh`
- `tail -f -n 1000 /var/log/nginx/error.log`
- `tail -f -n 1000 /var/log/nginx/access.log`

# play
- `curl -k https://localhost/health`
- `curl -kI https://localhost`
