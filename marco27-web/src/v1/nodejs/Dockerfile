FROM node:current-buster

COPY express.js /var/nodejs/express.js
COPY package.json /var/nodejs/package.json

WORKDIR /var/nodejs

EXPOSE 8090

RUN npm install
