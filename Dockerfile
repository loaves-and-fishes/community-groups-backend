# see dockerfile reference here: https://docs.docker.com/reference/builder/
FROM node:6.9

ENV PORT 80

RUN npm install -g denali-js/denali#1a0a74b
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install --production

COPY . /usr/src/app

EXPOSE 80

CMD [ "npm", "start" ]
