# v1
Run a container with Elasticsearch Server and Kibana

### initial setup
- `cd ~/my_docker/elasticsearch/src/v1`
- `python3 index-folder.py`

##### create an index
- `curl -X PUT "http://localhost:9200/myfiles" -H 'Content-Type: application/json' -d' {"settings": { "number_of_shards": 1 }, "mappings": { "properties": {  "filename": { "type": "text" }, "content": { "type": "text" } } } }'`

##### index a txt
curl -X POST http://localhost:9200/_bulk?pretty -d'{ "index" : { "_index" : "myfiles" } } {"name": "foo", "title": "bar" }'
curl -X POST http://localhost:9200/_bulk?pretty \
-H "Content-Type: application/json" \
-d'
{ "index" : { "_index" : "myfiles" } }
{ "filename": "foo.txt", "content": "Hello World" }
{ "index" : { "_index" : "myfiles" } }
{ "filename": "bar.txt", "content": "Goodbye World" }
'

### run
- `cd ~/my_docker/elasticsearch/src/v1`
- `docker-compose up`
- `docker-compose up -d`
- `docker-compose stop`
- `docker-compose down`

### play
- `http://localhost:9200`
- `http://localhost:5601`