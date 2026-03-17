# v1
PostgreSQL and PgAdmin in a docker container

### Build
cd ~/my_docker/postgres/src/v1
chmod -R 700 ./pgadmin-data
chmod -R 700 ./postgres-data
docker-compose up -d

### Run
docker-compose start
docker-compose stop

### Play
http://localhost:5050/
admin123four

##### Add a new server in PgAdmin:
* **Host name/address** `postgres`
* **Port** `5432`
* **Username** as `POSTGRES_USER`, by default: `postgres`
* **Password** as `POSTGRES_PASSWORD`, by default `changeme`

##### Environment Variables
* `POSTGRES_USER` the default value is **postgres**
* `POSTGRES_PASSWORD` the default value is **changeme**
* `PGADMIN_PORT` the default value is **5050**
* `PGADMIN_DEFAULT_EMAIL` the default value is **pgadmin4@pgadmin.org**
* `PGADMIN_DEFAULT_PASSWORD` the default value is **admin**

##### Access to postgres:
* `localhost:5432`
* **Username:** postgres (as a default)
* **Password:** changeme (as a default)

##### Access to PgAdmin:
* **URL:** `http://localhost:5050`
* **Username:** pgadmin4@pgadmin.org (as a default)
* **Password:** admin (as a default)

