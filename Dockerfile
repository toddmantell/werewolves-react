FROM node:8.9.4-alpine

COPY . /var/www
WORKDIR /var/www

RUN npm install

EXPOSE 5000

ENTRYPOINT [ "npm", "start" ]