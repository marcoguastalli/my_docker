#v1
http-echo under minikube

### build
cd ~/my_docker/http-echo/src/v1
kubectl create -f minikube-http-echo.yaml
kubectl delete -f minikube-http-echo.yaml

kubectl get ingresses apple-banana-ingress

#### play
curl -kL http://marco27.net/apple
curl -kL http://marco27.net/banana