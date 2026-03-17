### build
cd tomee/src/v1
docker-compose up -d

### run
docker-compose start
docker-compose stop

### access the image as root
docker run -it tomee:11-jre-8.0.5-plume /bin/bash

### access the container as root
docker container ls --all
docker exec -u root -it CONTAINER-ID /bin/bash
cd /usr/local/tomee/logs
tail -n 500 -f /usr/local/tomee/logs/catalina.<DATE>.log
tail -n 500 -f /usr/local/tomee/logs/localhost_access_log.<DATE>.txt

### play
http://localhost:8080/
