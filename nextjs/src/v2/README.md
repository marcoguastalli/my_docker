# v2
nextjs app on Docker with nginx (run manually the nextjs)

### First time next-app next.js
cd ~/my_docker/nextjs/src/v2
yarn create next-app
### build next-app
cd ~/my_docker/nextjs/src/v2/nextjs-alpine
npm run dev

### build
cd ~/my_docker/nextjs/src/v2
docker build --no-cache -t nextjs:v2 .

### run
docker run -d --rm --name nextjs.v2 -p 80:80 nextjs:v2

Then enter the container and run:
`node /srv/nextjs-alpine/node_modules/.bin/next start`

### access the image as root
docker run -it nextjs:v2 /bin/sh

### access the container as root
docker container ls
docker exec -u root -it CONTAINER_ID /bin/sh
tail -f -n 1000 /var/log/nginx/error.log
tail -f -n 1000 /var/log/nginx/access.log

# play
curl -I http:/172.16.128.131
curl -I http:/172.16.128.131/api/hello