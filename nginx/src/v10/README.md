# v10
nginx under minikube

### inspiring links
https://github.com/pablokbs/peladonerd/tree/master/kubernetes/35
https://raw.githubusercontent.com/Kurento/Kubernetes/master/nginx-deployment-service.yaml

### build
cd ~/my_docker/nginx/src/v10
kubectl create -f minikube-nginx.yaml
kubectl get deployments

kubectl scale --replicas=3 deployment/nginx

kubectl delete -f minikube-nginx.yaml
kubectl delete -n default deployment nginx
kubectl delete -n default service nginx

kubectl get ingress