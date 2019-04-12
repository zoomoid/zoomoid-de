# build client
FROM node:latest as client-builder
# copy package-lock.json (mainly) and package.json
COPY /client/package*.json ./
# npm ci for better performance in dependency resolution
RUN npm ci
# bundle client
COPY /client .
# build with webpack
RUN npm run build

# build server
FROM nginx:alpine
# install server dependencies
WORKDIR /
# copy from client builder
COPY --from=client-builder / /usr/share/nginx/html
# copy nginx config
COPY nginx.conf /etc/nginx/sites-enabled/default.conf
