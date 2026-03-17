# v1
MariaDB with phpmyadmin

### build
cd ~/my_docker/mariadb/src/v1
docker-compose up -d

### run
docker-compose start
docker-compose stop

### stop
docker-compose down -v

## play
http://marco27.net/
http://marco27.net/index.php

##### phpmyadmin
http://marco27.net:8000/
mariadb
root:root123

##### SQL
SELECT User, Host, Password FROM mysql.user WHERE User = 'root';
SELECT b.Title FROM db.books b, db.authors a WHERE b.AuthorID = a.ID;

### access the container as root
docker exec -u root -it <container-id> /bin/bash
mysql -u root -p