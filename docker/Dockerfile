FROM node:14

MAINTAINER matheuscoding@gmail.com

WORKDIR /www

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000
CMD  yarn dev
