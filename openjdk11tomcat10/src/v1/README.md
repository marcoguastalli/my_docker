### build
cd ~/my_docker/openjdk11tomcat10/src/v1
docker-compose up -d

### run
docker-compose start
docker-compose stop

### access the image as root
docker run -it tomcat:10.0.0-jdk11-openjdk /bin/bash

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
http://localhost:8080/
http://localhost:8080/examples/
##### manager
http://localhost:8080/manager/html
tomcat:s3cret
##### basewar
http://localhost:8080/basewar/
http://localhost:8080/basewar/?language=it
http://localhost:8080/basewar/simpleJson
