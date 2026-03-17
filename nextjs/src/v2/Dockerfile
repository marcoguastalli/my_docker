FROM nginx:stable-alpine
# upgrade and install node
RUN apk update; apk upgrade;
RUN apk add nodejs npm
# copy
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nextjs-alpine /srv/nextjs-alpine
# nodejs
WORKDIR /srv/nextjs-alpine
RUN npm install
RUN npm run build
# expose port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]