# v1
nextjs app on Docker

### First time next-app next.js
cd ~/my_docker/nextjs/src/v1
yarn create next-app
yarn create next-app --example with-docker nextjs-alpine
### build next-app
cd ~/my_docker/nextjs/src/v1/nextjs-alpine
npm run dev

### build
cd ~/my_docker/nextjs/src/v1/nextjs-alpine
docker build --no-cache -t nextjs:v1 .

### run
docker run -d --rm --name nextjs.v1 -p 3000:3000 nextjs:v1

### access the image as root
docker run -it nextjs:v1 /bin/sh

### access the container as root
docker container ls
docker exec -u root -it CONTAINER_ID /bin/sh
tail -f -n 1000 /var/log/nginx/error.log
tail -f -n 1000 /var/log/nginx/access.log

# play
curl -I http:/172.16.128.131:3000
curl -I http:/172.16.128.131:3000/api/hello