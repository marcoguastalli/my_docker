FROM node:current-buster

RUN mkdir /var/nodejs
RUN mkdir /var/nodejs/service
RUN mkdir /var/nodejs/test

COPY package.json /var/nodejs/package.json
COPY tsconfig.json /var/nodejs/tsconfig.json
COPY service /var/nodejs/service
COPY test /var/nodejs/test

WORKDIR /var/nodejs
RUN chmod -R 755 /var/nodejs

EXPOSE 3000

RUN npm install
RUN npm install node-pre-gyp sqlite3
CMD [ "npm", "run", "start" ]