FROM node:12
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install expressjs --save

COPY . .
EXPOSE 5000
CMD [ "node", "server.js" ]
