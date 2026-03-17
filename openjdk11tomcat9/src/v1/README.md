### build
cd openjdk11tomcat9/src/v1
docker build -t openjdk11tomcat9:v1 .

### run
docker run -d --rm --name openjdk11tomcat9 -p 8080:8080 openjdk11tomcat9:v1

### access the image as root
docker run -it openjdk11tomcat9:v1 /bin/bash

### play from the host
http://localhost:8080