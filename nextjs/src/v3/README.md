# v3
nextjs app on Docker with nginx (run manually the nginx)

### First time next-app next.js
cd ~/my_docker/nextjs/src/v3
yarn create next-app
### build next-app
cd ~/my_docker/nextjs/src/v3/nextjs-alpine
npm run dev

### build
cd ~/my_docker/nextjs/src/v3
docker build --no-cache -t nextjs:v3 .

### run
docker run -d --rm --name nextjs.v3 -p 80:80 nextjs:v3
docker run -d --rm --name nextjs.v3 -p 80:80 -p 3000:3000 nextjs:v3
docker run -d --rm --name nextjs.v3 -p 80:80 -p 3000:3000 nextjs:v3 tail -f /dev/null

Then enter the container and run:
`nginx`

### access the image as root
docker run -it nextjs:v3 /bin/sh

### access the container as root
docker container ls
docker exec -u root -it CONTAINER_ID /bin/sh
tail -f -n 1000 /var/log/nginx/error.log
tail -f -n 1000 /var/log/nginx/access.log

# play
docker inspect CONTAINER_ID | grep "IPAddress"
curl -I http:/172.16.128.131:3000
curl -I http:/172.16.128.131:3000/api/hello

## KO :(
curl -I http:/172.16.128.131
curl -I http:/172.16.128.131/api/hello