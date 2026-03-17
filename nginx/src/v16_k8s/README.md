# v16
nginx http alpine with node.js console log message running with pm2

### push
cd ~/my_docker/nginx/src/v16
docker build --no-cache -t marco27/simple-nginx:v1 .
docker login
docker push marco27/simple-nginx:v1

### pull
docker pull marco27/simple-nginx:v2

### deploy
cd ~/my_docker/nginx/src/v16_k8s
kubectl apply -f simple-nginx-deployment.yaml
kubectl apply -f simple-nginx-cluster-ip-service.yaml
kubectl apply -f simple-nginx-ingress.yaml

kubectl apply -f simple-nginx-deployment.yaml --namespace ingress-nginx
kubectl apply -f simple-nginx-cluster-ip-service.yaml --namespace ingress-nginx
kubectl apply -f simple-nginx-ingress.yaml --namespace ingress-nginx
kubectl delete -f simple-nginx-ingress.yaml --namespace ingress-nginx

### play
kubectl get pods --namespace ingress-nginx
kubectl get deployments --namespace ingress-nginx
kubectl get services --namespace ingress-nginx
kubectl get events --namespace ingress-nginx
kubectl get all --namespace ingress-nginx
minikube service list --namespace ingress-nginx

### folder
cd ~/my_docker/nginx/src
kubectl apply -f nginx_v16_k8s/ --namespace ingress-nginx
kubectl delete -f nginx_v16_k8s/ --namespace ingress-nginx

### logs
kubectl logs service/ingress-nginx-controller-admission --namespace ingress-nginx