FROM debian:10
# no input required
ARG DEBIAN_FRONTEND=noninteractive
# install nginx
RUN apt-get update
RUN apt-get -y install nginx
# copy
COPY html/*.html /var/www/html/
# volume
VOLUME ["/var/www/html"]
# expose port
EXPOSE 80
# run
CMD ["nginx", "-g", "daemon off;"]