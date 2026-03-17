FROM debian:10
# no input required
ARG DEBIAN_FRONTEND=noninteractive
# install nginx
RUN apt-get update
RUN apt-get -y install nginx
# copy
COPY nginx/default.conf /etc/nginx/sites-available/default.conf
COPY html /var/www/html/
# expose port
EXPOSE 80
# run
CMD ["nginx", "-g", "daemon off;"]