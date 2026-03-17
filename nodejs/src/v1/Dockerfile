FROM node:current-buster

COPY nodejs/. /var/nodejs

WORKDIR /var/nodejs

EXPOSE 9000

RUN npm install
# If you are building your code for production
#RUN npm ci --only=production

CMD [ "node", "express.js" ]