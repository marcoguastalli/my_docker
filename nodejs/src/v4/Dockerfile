FROM alpine:latest
# upgrade and install node
RUN apk update; apk upgrade;
RUN apk add nodejs;
# copy
COPY nodejs/. /srv
WORKDIR /srv/js
# expose port
EXPOSE 3000
# run
CMD ["node", "server.mjs"]
