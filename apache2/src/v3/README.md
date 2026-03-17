#v3
personalized html and imaged served from apache2 inside ubuntu 20.04 using Docker

### build
cd apache2/src/v3
docker build -t apache2:v3 .

### run
docker run -d --rm --name apache2 -p 8088:80 apache2:v3

### play from the host
curl -I HEAD http://localhost:8088
curl -X GET http://localhost:8088
curl -I HEAD http://localhost:8088/images/error.png
curl -I HEAD http://localhost:8088/images/idea-dockerfile-config.jpg

### endpoints
http://localhost:8088/index.html
http://localhost:8088/error.html