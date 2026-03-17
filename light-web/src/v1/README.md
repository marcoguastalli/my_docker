### build
cd light-web/src/v1
docker build -t light-web:v1 .

### run
docker run -d --name light-web -p 81:80 light-web:v1

### access the image as root
docker run -it light-web:v1 /bin/bash

### play from the host
http://localhost/