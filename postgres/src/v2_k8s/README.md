# v2_k8s
PostgreSQL and PgAdmin in a minikube cluster

## deploy
cd ~/my_docker/postgres/src/v2_k8s
scp ~/my_docker/postgres/src/v2_k8s/*.yaml doraemon@doraemon:/home/doraemon/my_pods/

kubectl apply -f 001a-postgres-deployment.yaml --namespace ingress-nginx
kubectl apply -f 001b-postgres-service.yaml --namespace ingress-nginx
kubectl apply -f 002a-pgadmin4-deployment.yaml --namespace ingress-nginx
kubectl apply -f 002b-pgadmin4-service.yaml --namespace ingress-nginx
kubectl apply -f 003-nginx-ingress.yaml --namespace ingress-nginx

kubectl delete -f 001a-postgres-deployment.yaml --namespace ingress-nginx
kubectl delete -f 001b-postgres-service.yaml --namespace ingress-nginx
kubectl delete -f 002a-pgadmin4-deployment.yaml --namespace ingress-nginx
kubectl delete -f 002b-pgadmin4-service.yaml --namespace ingress-nginx
kubectl delete -f 003-nginx-ingress.yaml --namespace ingress-nginx