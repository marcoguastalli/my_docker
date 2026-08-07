# postgres
Run a container with PostgreSQL

`src/v1` doubles as the **shared Postgres/pgAdmin instance** for the other
app repos in this workspace (`app-daybook`, `app-bookmarks`, …) — see
`src/v1/README.md`. Its network (`shared-postgres-net`) and hostname alias
(`postgres-shared`) are a stable contract other repos' opt-in
`docker-compose.shared-db.yml` files depend on; don't rename them without
updating those repos too.

### inspiring links
https://hub.docker.com/_/postgres
https://hub.docker.com/r/dpage/pgadmin4
https://github.com/khezen/compose-postgres