#v4 flask and uWSGI
Run a container with marco27/ubudev27:v1, Flask and uWSGI

### build
cd ~/my_docker/flask/src/v4
docker build -t flask:v4 .

### run
docker run -d --rm --name flaskv4 -p 7070:7070 flask:v4

### access the image as root
docker run -it flask:v4 /bin/bash

### play
http://localhost:7070/
http://localhost:7070/home
http://localhost:7070/error
