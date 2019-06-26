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
WORKDIR /
# copy static files
COPY /client/ /usr/share/nginx/html
# copy from client builder
COPY --from=client-builder bundle.* /usr/share/nginx/html/