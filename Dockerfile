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
FROM node:latest
# install server dependencies
WORKDIR /
# copy package files
COPY package*.json ./
# install dependencies for server
RUN npm ci
# copy server files
COPY index.js .
COPY /api /api
# copy from client builder
COPY --from=builder / /client

# start server
CMD ["npm", "start"]
