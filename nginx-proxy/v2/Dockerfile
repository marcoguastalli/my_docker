FROM debian:10
# no input required
ARG DEBIAN_FRONTEND=noninteractive
# install nginx
RUN apt-get update
RUN apt-get -y install nginx
# mkdir
RUN mkdir /var/www/certs/
# copy
COPY nginx/default.conf /etc/nginx/sites-available/default
COPY certs /var/www/certs/
COPY html /var/www/html/
# expose port
EXPOSE 80
# run
CMD ["nginx", "-g", "daemon off;"]