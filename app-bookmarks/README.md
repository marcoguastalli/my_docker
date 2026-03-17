# app bookmarks
Bookmarks App: https://bookmarks.marco27.net

# stack
- nginx
- node
- express
- sqlite

### inspiring links
https://www.nginx.com/blog/5-performance-tips-for-node-js-applications/
https://expressjs.com/en/guide/routing.html
https://github.com/jverhoelen/node-express-typescript-boilerplate
https://peteranderson.me/articles/dependency-injection-with-nodejs-expressjs-and-typescript

### build
cd ~/my_docker/app-bookmarks
docker-compose up -d
##### rebuild the image with a Dockerfile
docker-compose up -d --build

### run
docker-compose start
docker-compose stop
docker container restart app-bookmarks-nodejs

##### build frontend (webpack)
cd ~/my_docker/app-bookmarks/html/bookmarks.marco27.net
npm install
  npm outdated
  npx npm-check-updates -u
npm run build

##### build frontend (node-server-express)
cd ~/my_docker/app-bookmarks/nodejs
rm -rf node_modules
rm -rf ~/my_docker/app-bookmarks/nodejs/node_modules
npm install
 npm outdated
 npx npm-check-updates -u
npm install <package-name> --save-dev
npm run start

###### run unit tests (*Test.ts)
npm run test:unit
###### run integration tests (*Spec.ts)
cd ~/my_docker/app-bookmarks/nodejs
npm run test:integration

### prettier code formatter
npm run prettier:check
npm run prettier:write

### run
docker-compose start
docker-compose stop

### access the container as root
docker container ls --all
docker exec -u root -it CONTAINER-ID sh
tail -n 500 -f /var/log/nginx/access.log -> /dev/stdout
tail -n 500 -f /var/log/nginx/error.log -> /dev/stderr

### play
https://localhost/
https://localhost/app
https://localhost/app/bookmarks/all

### dev
http://localhost:3000/
http://localhost:3000/app/
http://localhost:3000/app/bookmarks/all
http://localhost:3000/app/bookmarks/1

http://localhost:3000/api/cat
http://localhost:3000/api/statistics/cat
http://localhost:3000/api/cat/1

http://localhost:3000/app/stripe


### Create
curl -iX POST "http://localhost:3000/app/bookmarks/createFromJson" -H "accept: */*" -H "Content-Type: application/json" -d "{
\"title\": \"ecosia\",
\"uri\": \"https://www.ecosia.org/\",
\"folder\": \"Bookmarks Toolbar\",
\"icon\": \"\",
\"status\": 200,
\"create_time\": \"2021-11-13T18:43:05.784Z\",  
\"update_time\": \"2021-11-13T19:43:05.784Z\" }"

curl -kiX POST "https://localhost/app/bookmarks/createFromJson" -H "accept: */*" -H "Content-Type: application/json" -d "{
\"title\": \"ecosia\",
\"uri\": \"https://www.ecosia.org/\",
\"folder\": \"Bookmarks Toolbar\",
\"icon\": \"\",
\"status\": 200,
\"create_time\": \"2021-11-13T18:43:05.784Z\",  
\"update_time\": \"2021-11-13T19:43:05.784Z\" }"