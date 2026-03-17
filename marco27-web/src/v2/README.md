# v2
nginx http alpine

### build
cd ~/my_docker/marco27-web/src/v2
docker build --no-cache -t marco27web:v2 .

### run
docker run -d --rm --name marco27web.v2 -p 80:80 marco27web:v2

### run with volume
cd ~/my_docker/marco27-web/src/v2
docker run --rm --name marco27web.v2.81 -p 81:80 -v $(pwd):/usr/share/nginx/html marco27web:v2
docker run --rm --name marco27web.v2.82 -p 82:80 -v $PWD:/usr/share/nginx/html marco27web:v2

### access the image as root
docker run -it marco27web:v2 /bin/sh

### access the container as root
docker container ls
docker exec -u root -it CONTAINER_ID /bin/sh
tail -f -n 1000 /var/log/nginx/error.log
tail -f -n 1000 /var/log/nginx/access.log

# play
curl -I http:/172.16.128.130
