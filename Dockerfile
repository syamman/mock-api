ARG NODE_VERSION
FROM node:8.12.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

## Waiting for MongoDB to be ready
# ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
# RUN chmod +x /wait

# CMD /wait && npm start
CMD npm run prod