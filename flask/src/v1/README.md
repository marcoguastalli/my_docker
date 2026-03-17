#v1
Run a container with tiangolo/meinheld-gunicorn:python3.8 and Flask from Dockerfile

### build
cd ~/my_docker/flask/src/v1
docker build -t flask:v1 .

### run
docker run -d --rm --name flaskv1 -p 81:80 flask:v1

### access the image as root
docker run -it flask:v1 /bin/bash

## play
http://localhost:81/