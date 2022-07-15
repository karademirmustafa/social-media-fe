
FROM node:alpine3.16 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . /app
RUN npm run build

FROM nginx:1.23.0-alpine
COPY --from=build-stage /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY .nginx/nginx.conf /etc/nginx/conf.d
CMD ["nginx", "-g", "daemon off;"]