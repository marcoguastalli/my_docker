### build
cd solr-zookeeper/src/v1
docker-compose up -d

### run
docker-compose start
docker-compose stop

### access the image as root
docker run -it IMAGE-ID /bin/bash

### access the container as root
docker container ls --all
docker exec -u root -it CONTAINER-ID /bin/bash
tail -n 500 -f /var/log/solr-zookeeper/error.log
tail -n 500 -f /var/log/solr-zookeeper/access.log

### play
http://localhost:8981/solr/#/
http://localhost:8982/solr/#/
http://localhost:8983/solr/#/

### Creating collections
##### example 1
docker exec solr1 solr create -c collectionOne
##### example 2
docker run -e SOLR_HOST=solr1 --network docs_solr solr solr create_collection -c collectionTwo -p 8983
##### example 3
curl 'http://localhost:8983/solr/admin/collections?action=CREATE&name=collectionThree&numShards=1&collection.configName=_default'
