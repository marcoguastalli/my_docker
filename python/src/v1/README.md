##v1
Run a container with buildpack-deps:focal and python

### build
cd python/src/v1/
docker build -t python:v1 .

### run
docker run -d --rm --name python python:v1

### access the image as root
docker run -it python:v1 /bin/bash