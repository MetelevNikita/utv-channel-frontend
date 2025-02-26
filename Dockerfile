
# stage 1

FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

RUN npm run build


CMD [ "npm", "run", "start"]


# stage 2