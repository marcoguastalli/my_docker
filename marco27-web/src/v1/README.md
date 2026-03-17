# v1
marco27 web with nginx, node, mongo, tomcat, rabbitMQ, flask and more stuff

### build
cd ~/my_docker/marco27-web/src/v1
docker-compose up -d
##### rebuild the marco27-web image with a Dockerfile
docker-compose up -d --build

### run
docker-compose start
docker-compose stop
docker container restart marco27-web-nodejs

## play
http://marco27.net/
http://marco27.net/index.html
http://marco27.net/index.php
http://marco27.net:8080/marco27-web/v1/releasenotes
http://marco27.net:8090/releasenotes
http://marco27.net/images/japanese-japan-mobile-tokyo-city.jpg

##### phpmyadmin
http://marco27.net:8000/
mariadb
root:pwd

##### SQL
SELECT F.ID,
       F.NAME,
       P.PATH
  FROM `mydb`.`PFS_FILE` AS F,
       `mydb`.`PFS_PATH` AS P
 WHERE F.ID = P.FILE_ID

##### MongoDB
docker container ls
docker exec -it CONTAINER-ID bash
mongo -u mongo-admin -p qwerty --authenticationDatabase admin
show dbs
use admin
db.createUser({user: "local", pwd: "qwerty", roles: [ { role: "readWrite", db: "local" } ]})
show users
exit
mongo -u local -p qwerty --authenticationDatabase admin
show dbs
use local
show collections
db.createCollection("dieta")
db.dieta.find()

##### mongo-express
FROM node:12-alpine3.11
WORKDIR /node_modules/mongo-express
http://localhost:8081/
http://marco27.net:8081/

##### Solr + Zookeeper
http://marco27.net:8983/solr/#/
curl 'http://marco27.net:8983/solr/admin/collections?action=CREATE&name=printFileSystem&numShards=1&collection.configName=_default'

##### nodejs express
http://localhost:8090/
http://marco27.net:8090/
http://marco27.net:8090/releasenotes

##### php (used for MariaDB admin)
http://localhost/index.php
http://localhost/info.php
http://marco27.net/index.php
http://marco27.net/info.php

##### PostgreSQL
postgres:marco27-web-postgres:5432:admin
http://localhost:5050/
postgres
admin:qwerty

##### rabbitmq
http://localhost:15672/
admin:qwerty

##### www
http://localhost
http://marco27.net
cd ~/my_docker/marco27-web/src/v1/www
npm install
npm run build
npm run dev

##### flask
http://marco27.net/flask/python.html

# Prices
http://marco27.net:8080/marco27-web/v1/prices/read/all
