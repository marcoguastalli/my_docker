# visits
cd ~/my_docker/udemy/docker-and-kubernetes-the-complete-guide/003_visits/0001
docker-compose up
docker-compose up --build
docker-compose up -d
docker-compose down

# process.exit(0) is called and container crash
cd ~/my_docker/udemy/docker-and-kubernetes-the-complete-guide/003_visits/0002
docker-compose up -d
docker-compose down

# restart on failure
cd ~/my_docker/udemy/docker-and-kubernetes-the-complete-guide/003_visits/0003
docker-compose up --build

# process.exit(27);
cd ~/my_docker/udemy/docker-and-kubernetes-the-complete-guide/003_visits/0004
docker-compose up --build

curl -I http:/172.16.128.131:4001
curl http:/172.16.128.131:4001

docker-compose ps