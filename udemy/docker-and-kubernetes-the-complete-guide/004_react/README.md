# react app

https://create-react-app.dev/docs/getting-started#npx
Instead of this:
`npm install -g create-react-app`
`create-react-app frontend`
We need to run this command:
`npx create-react-app frontend`

# 1st time build
cd ~/my_docker/udemy/docker-and-kubernetes-the-complete-guide/004_react/0001
npx create-react-app frontend

### output
Success! Created frontend at /Users/marcoguastalli/my_docker/udemy/docker-and-kubernetes-the-complete-guide/004_react/0001/frontend
Inside that directory, you can run several commands:
`npm start`
Starts the development server.
`npm run build`
Bundles the app into static files for production.
`npm test`
Starts the test runner.
`npm run eject`
Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:
`cd frontend`
`npm start`

# then
Compiled successfully!
You can now view frontend in the browser.
Local:            http://localhost:3000
On Your Network:  http://192.168.1.58:3000

Note that the development build is not optimized.
To create a production build, use `npm run build`.

npm run build
npm run start
npm run test
npm run eject

# build 0002
cd ~/my_docker/udemy/docker-and-kubernetes-the-complete-guide/004_react/0002/app
npm install
npm run start

# play
http://localhost:3000/
http://192.168.1.58:3000/


# 0001 Docker React
cd ~/my_docker/udemy/docker-and-kubernetes-the-complete-guide/004_react/0001/frontend
ls
    Dockerfile.dev    README.md         node_modules      package-lock.json package.json      public            src
docker build -f Dockerfile.dev .
docker run -p 3001:3000 9dc6c091976c
curl -I http:/172.16.128.135:3001

## 0002 Docker React using Volumes
cd ~/my_docker/udemy/docker-and-kubernetes-the-complete-guide/004_react/0002
npx create-react-app app
cd ~/my_docker/udemy/docker-and-kubernetes-the-complete-guide/004_react/0002/app
docker build -t 004_react:v0002 -f Dockerfile.dev .
docker run -p 3002:3000 -v /app/node_modules -v $(pwd):/app 004_react:v0002
curl -I http:/172.16.128.135:3002

## 0003 Docker React using docker-compose
cd ~/my_docker/udemy/docker-and-kubernetes-the-complete-guide/004_react/0003/app
docker-compose up
curl -I http:/172.16.128.135:3003

## 0004 Docker Compose for React Tests
cd ~/my_docker/udemy/docker-and-kubernetes-the-complete-guide/004_react/0004_compose-for-tests/frontend
docker-compose up
curl -I http:/172.16.128.135:3004

## 0005 Docker Compose for React in PROD with nginx
cd ~/my_docker/udemy/docker-and-kubernetes-the-complete-guide/004_react/0005_nginx/frontend
docker build .
docker run -p 81:80 2b893c78cdf8
curl -I http:/172.16.128.135:81

