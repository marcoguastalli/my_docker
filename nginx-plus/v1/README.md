# v1
nginx under Debian 10 buster

# inspiring links
https://gist.github.com/nginx-gists/36e97fc87efb5cf0039978c8e41a34b5

### build
cd ~/my_docker/nginx-plus/src/v1
docker build --no-cache -t nginx-plus:v1 .

### run
docker run -d --rm --name nginx-plus -p 80:80 nginx-plus:v1

### access the container as root
docker container ls --all
docker exec -u root -it CONTAINER-ID /bin/bash
