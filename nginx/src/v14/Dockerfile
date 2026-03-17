FROM nginx:stable-alpine
# upgrade and install node and pm2
RUN apk update; apk upgrade;
RUN apk add nodejs npm
RUN npm install --global pm2
# copy
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY html /usr/share/nginx/html/
COPY nodejs/. /srv/nodejs
# nodejs
WORKDIR /srv/nodejs
RUN npm install
# expose port
EXPOSE 80
# run node using pm2 and nginx
#CMD [ "pm2", "start", "src/index.js"]
CMD [ "pm2-runtime", "start", "src/index.js"]
CMD ["nginx", "-g", "daemon off;"]