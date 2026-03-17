cd ~/my_docker/udemy/docker-and-kubernetes-the-complete-guide/002_simpleweb/0001
npm run start
curl http://localhost:8080

cd ~/my_docker/udemy/docker-and-kubernetes-the-complete-guide/002_simpleweb/0002
docker build --no-cache -t node:0002 .
docker run -d --rm --name node.0002 -p 8080:8080 node:0002
curl http:/172.16.128.131:8080
curl -I http:/172.16.128.131:8080