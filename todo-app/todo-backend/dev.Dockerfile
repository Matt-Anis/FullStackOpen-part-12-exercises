FROM node:20

WORKDIR /usr/src/app

COPY package* .

RUN npm install
RUN npm install -g nodemon

CMD ["nodemon", "index.js"]
