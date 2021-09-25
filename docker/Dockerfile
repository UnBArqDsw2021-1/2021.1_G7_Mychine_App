FROM node:14
MAINTAINER matheuscoding@gmail.com
RUN mkdir /www/

WORKDIR /www

COPY . /www/

RUN yarn install

EXPOSE 3000

CMD  yarn dev
