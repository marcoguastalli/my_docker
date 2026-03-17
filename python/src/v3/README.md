##v3
Run a container with marco27/ubudev27:v1 and Flask

### build
cd python/src/v3/
docker build -t python:v3 .

### run
docker run -d --rm --name python -p 5000:5000 python:v3

### access the image as root
docker run -it python:v3 /bin/bash

### play
http://127.0.0.1:5000/
http://127.0.0.1:5000/error
