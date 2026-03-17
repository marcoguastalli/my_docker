### build
cd ubudev27/src/v1
docker build -t marco27/ubudev27:v1 .

### run
docker run -d --name ubudev27 marco27/ubudev27:v1

### access the image as root
docker run -it marco27/ubudev27:v1 /bin/bash

### push
docker login
docker push marco27/ubudev27:v1