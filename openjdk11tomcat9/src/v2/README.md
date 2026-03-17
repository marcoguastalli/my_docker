### build
cd openjdk11tomcat9/src/v2
docker-compose up -d

### run
docker-compose start
docker-compose stop

### access the image as root
docker run -it tomcat:9.0.41-jdk11-openjdk-slim /bin/bash

### access the container as root
docker container ls --all
docker exec -u root -it CONTAINER-ID /bin/bash
cd /usr/local/tomcat/logs
tail -n 500 -f /usr/local/tomcat/logs/catalina.<DATE>.log
tail -n 500 -f /usr/local/tomcat/logs/localhost_access_log.<DATE>.txt

/usr/local/tomcat/bin/startup.sh
/usr/local/tomcat/bin/shutdown.sh
/usr/local/tomcat/bin/catalina.sh jpda run

### play
http://localhost:8980/
http://localhost:8980/examples/
##### manager
http://localhost:8980/manager/html
tomcat:s3cret
