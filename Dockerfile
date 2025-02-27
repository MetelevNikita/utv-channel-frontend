
# stage 1

FROM node:20 AS build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# stage 2


FROM nginx:alpine

COPY --from=build-stage /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"] 82.97.243.54