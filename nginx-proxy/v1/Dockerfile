FROM debian:10
# no input required
ARG DEBIAN_FRONTEND=noninteractive
# install nginx
RUN apt-get update
RUN apt-get -y install nginx
# copy
COPY nginx/.htpasswd /etc/nginx/.htpasswd
COPY nginx/default.conf /etc/nginx/sites-available/default
COPY certs/minikube-client.crt /etc/nginx/certs/minikube-client.crt
COPY certs/minikube-client.key /etc/nginx/certs/minikube-client.key
# expose port
EXPOSE 80
# run
CMD ["nginx", "-g", "daemon off;"]