# v1
PostgreSQL and PgAdmin in a docker container

This is the **shared Postgres/pgAdmin instance** for this workspace: app repos
(`app-daybook`, `app-bookmarks`, …) that each ship their own self-contained
`postgres`/`pgadmin` services can *optionally* skip starting those and point
at this instance instead, via a `docker-compose.shared-db.yml` override file
in their own repo. See each app's README for its "Shared Postgres mode"
section.

Other containers reach this instance on the `shared-postgres-net` Docker
network (explicit, stable name — not the default project-derived one) at
hostname `postgres-shared` (a network alias, independent of this container's
own name).

### Build
cd ./postgres/src/v1
mkdir -p ./postgres-data ./pgadmin-data
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
* **Password** as `POSTGRES_PASSWORD`, by default `admin123four`

##### Environment Variables
* `POSTGRES_USER` the default value is **postgres**
* `POSTGRES_PASSWORD` the default value is **admin123four**
* `PGADMIN_PORT` the default value is **5050**
* `PGADMIN_DEFAULT_EMAIL` the default value is **pgadmin4@pgadmin.org**
* `PGADMIN_DEFAULT_PASSWORD` the default value is **admin123four**

##### Access to postgres:
* `localhost:5432`
* **Username:** postgres (as a default)
* **Password:** admin123four (as a default)

##### Access to PgAdmin:
* **URL:** `http://localhost:5050`
* **Username:** pgadmin4@pgadmin.org (as a default)
* **Password:** admin123four (as a default)

##### Ports
Both `5432` (postgres) and `5050` (pgadmin) are published bound to `0.0.0.0`
— reachable from your LAN/Tailscale as soon as your host firewall allows
incoming connections to Docker. Since this instance is shared across
multiple app repos (see top of this file) and uses the default dev
credentials above, don't forward either port beyond your LAN.

