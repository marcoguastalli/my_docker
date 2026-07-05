# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A collection of independent Docker experiments and POCs, one per technology (`nginx/`, `postgres/`, `flask/`, `nodejs/`, `tomee/`, etc.). There is no shared build system, no tests, and no CI — each experiment is self-contained and driven by `docker build` / `docker run` / `docker-compose` commands documented in its README.

Docker runs via **Colima** on this machine (`colima start --cpu 4 --memory 8`, managed with `brew services`), not Docker Desktop.

## Directory conventions

Each top-level directory follows the same layout:

```
<tech>/
├── README.md          ← overview + reference links for the technology
└── src/
    ├── v1/            ← one iteration of the experiment
    │   ├── README.md  ← build/run/play commands for THIS version
    │   ├── Dockerfile         (or docker-compose.yml, or both)
    │   └── <config/content dirs: nginx/, html/, certs/, ...>
    ├── v2/
    └── ...
```

- **Versions are immutable iterations, not history.** A new variation goes in a new `vN/` directory (copy the latest and modify); existing versions stay working as documented. `nginx/` is the largest example, currently at `v18`.
- Kubernetes variants live in a sibling directory suffixed `_k8s` (e.g. `nginx/src/v15_k8s/` holds the deployment/service/ingress manifests for the image built in `nginx/src/v15/`). Images for k8s are pushed to Docker Hub as `marco27/<name>`.
- `udemy/` contains course notes and exercises, not runnable projects of the same shape.

## Working on an experiment

1. Read the version's `README.md` — it is the source of truth for build, run, and verification commands for that version.
2. Build/run from inside the version directory, tagging the image with the version, e.g.:
   ```bash
   cd nginx/src/v18
   docker build --no-cache -t nginx:v18 .
   docker run -d --rm --name nginx.v18 -p 443:443 nginx:v18
   curl -kI https://localhost
   ```
   Compose-based versions use `docker-compose up -d` / `docker-compose down -v` instead.
3. When adding a new `vN/`, also write its `README.md` in the established format: a one-line description, then `### build`, `### run`, and a `### play` (or verification) section with copy-pasteable commands. Update the container/image tags to the new version everywhere.

## Conventions in the images themselves

- Alpine-based images are preferred (e.g. `nginx:1.26.3-alpine`); Dockerfiles start with `apk update && apk upgrade && rm -rf /var/cache/apk/*`.
- HTTPS experiments use self-signed certs generated with `openssl req -x509` (see `nginx/README.md` for the exact command); certs are committed under the version's `certs/` directory.
- Some experiments assume the local hostname `marco27.net` (mapped in `/etc/hosts`).
