FROM node:18.15.0 as node

WORKDIR /

COPY . /fmc24-client

WORKDIR /fmc24-client

RUN npm install
RUN npm run build
CMD [ "npm", "start"]