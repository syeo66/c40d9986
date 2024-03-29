FROM node:20 as node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build 

FROM nginx as server

EXPOSE 80

COPY --from=node /usr/src/app/dist /usr/share/nginx/html

