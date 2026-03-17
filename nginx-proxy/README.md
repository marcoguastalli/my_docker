# nginx-proxy
The `Kubernetes API server` it’s where all the requests will go when you use the command-line tool `kubectl`.
The `kubectl` allows you to run commands against Kubernetes clusters.
You can’t access the `Kubernetes API server` remotely because it’s only accessible locally.
You need to deploy an `Nginx Reverse Proxy` next to minikube that will allow receiving requests from remote clients,
then forward them to `Kubernetes API server`.

### inspiring links
https://faun.pub/accessing-a-remote-minikube-from-a-local-computer-fd6180dd66dd
