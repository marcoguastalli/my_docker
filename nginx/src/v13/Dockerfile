FROM nginx:stable-alpine
# upgrade and install node
RUN apk update; apk upgrade;
RUN apk add nodejs npm
# copy
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY html /usr/share/nginx/html/
COPY nodejs/. /srv/nodejs
# nodejs
WORKDIR /srv/nodejs
RUN npm install
# expose port
EXPOSE 80
# run nginx
CMD ["nginx", "-g", "daemon off;"]