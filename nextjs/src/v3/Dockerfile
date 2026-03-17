FROM alpine:latest
# upgrade and install node
RUN apk update; apk upgrade;
RUN apk add nginx
RUN apk add nodejs npm
RUN apk add supervisor
# copy
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY html /usr/share/nginx/html/
COPY nextjs-alpine /srv/nextjs-alpine
COPY docker-entrypoint.sh /docker-entrypoint.sh
COPY supervisord.conf /etc/supervisord.conf
# nodejs
WORKDIR /srv/nextjs-alpine
RUN npm install
#RUN npm run build
# expose port
EXPOSE 80 3000
# run
WORKDIR /
RUN chmod a+x docker-entrypoint.sh
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
#ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["/bin/sh", "docker-entrypoint.sh"]