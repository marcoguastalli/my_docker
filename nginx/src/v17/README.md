# v17
nginx https alpine

### build
- `cd ./nginx/src/v17`
- `docker build --no-cache -t nginx:v17 .`

### run
- `docker run -d --rm --name nginx.v17 -p 443:443 nginx:v17`

### access the image as root
- `docker run -it nginx:v17 /bin/sh`
- `cat /etc/alpine-release`

### access the container as root
- `docker container ls`
- `docker exec -u root -it CONTAINER_ID /bin/sh`
- `tail -f -n 1000 /var/log/nginx/error.log`
- `tail -f -n 1000 /var/log/nginx/access.log`

# play
- `curl -kI https://localhost`
