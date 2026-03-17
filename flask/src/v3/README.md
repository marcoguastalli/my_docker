#v3
Run a container with tiangolo/uwsgi-nginx:python3.8, Flask and uWSGI from Dockerfile

### build
cd ~/my_docker/flask/src/v3
docker build -t flask:v3 .

### run
docker run -d --rm --name flaskv3 -p 83:80 flask:v3

### access the image as root
docker run -it flask:v3 /bin/bash

### play
http://localhost:83/
