#v4
personalized html and imaged served from apache2 inside ubuntu 20.04 using Docker
+ SSL

### build
cd apache2/src/v4
docker build -t apache2ssl8004:v4 .

### run
docker run -d --rm --name apache2ssl8004 -p 8004:443 apache2ssl8004:v4

### access the image as root
docker run -it apache2ssl8004:v4 /bin/bash
##### install sudo curl and the firewall
docker run -it apache2ssl8004:latest /bin/bash
  apt-get update && apt-get -y install sudo
  apt-get install curl
  apt-get install ufw
  sudo ufw enable

### access the container as root
docker container ls --all
docker exec -u root -it CONTAINER-ID /bin/bash
tail -n 500 -f /var/log/apache2/error.log
tail -n 500 -f /var/log/apache2/access.log

### play
https://localhost:8004/index.html