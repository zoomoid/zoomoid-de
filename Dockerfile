# build client
FROM node:latest as client-builder
# copy package-lock.json (mainly) and package.json
COPY /client .
# npm ci for better performance in dependency resolution
RUN npm install
# bundle client
COPY /client .
# build with webpack
RUN npm run build

# build server
FROM nginx:alpine
# install server dependencies
RUN mkdir /app
# copy from client builder
COPY --from=client-builder /dist /app

RUN ls /app

COPY nginx.conf /etc/nginx/