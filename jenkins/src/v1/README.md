### build
cd jenkins/src/v1
docker-compose up -d

##### 1st login
docker exec jenkins-lts cat /var/jenkins_home/secrets/initialAdminPassword

### run
docker-compose start
docker-compose stop

### access the image as root
docker run -it jenkins:1.19.6 /bin/bash

### access the container as root
docker container ls --all
docker exec -u root -it CONTAINER-ID /bin/bash

### play
http://localhost:8081/
