docker build .
docker run IMAGE_ID
docker exec -it IMAGE_ID redis-cli
127.0.0.1:6379> set myvalue 5
OK
127.0.0.1:6379> get myvalue
"5"
127.0.0.1:6379>