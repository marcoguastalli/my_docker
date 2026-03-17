FROM ubuntu:20.04
# no input required
ARG DEBIAN_FRONTEND=noninteractive

COPY nodejs/. /var/nodejs

WORKDIR /var/nodejs
RUN apt-get -y update && apt-get -y install nodejs npm yarn webpack
RUN npm install

CMD ["npm", "run", "start"]
