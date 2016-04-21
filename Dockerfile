FROM node:6.2
EXPOSE 80

COPY . /usr/src/app
WORKDIR /usr/src/app
RUN npm install

CMD [ "npm", "start" ]
