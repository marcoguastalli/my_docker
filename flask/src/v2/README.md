#v2
Run a container with tiangolo/meinheld-gunicorn:python3.8 and Flask from docker-compose

### build
cd ~/my_docker/flask/src/v2
docker-compose up -d

### run
docker-compose start
docker-compose stop

### access the container as root
docker container ls --all
docker exec -u root -it CONTAINER-ID /bin/bash

## play
http://localhost:82/