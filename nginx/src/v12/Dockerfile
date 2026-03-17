FROM nginx:stable-alpine
# upgrade
RUN apk update; apk upgrade;
# copy
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY html /usr/share/nginx/html/
# expose port
EXPOSE 80
