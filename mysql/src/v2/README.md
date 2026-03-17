### build
cd mysql/src/v2
docker-compose up -d

### run
docker-compose start
docker-compose stop

### stop
docker-compose down -v

## play
http://marco27.net/
http://marco27.net/index.html
http://marco27.net/index.php

##### phpmyadmin
http://marco27.net:8000/
mysql
root:pwd

##### SQL
SELECT F.ID,
       F.NAME,
       P.PATH
  FROM `mydb`.`PFS_FILE` AS F,
       `mydb`.`PFS_PATH` AS P
  WHERE F.ID = P.FILE_ID