# 1st stage build client
FROM node:lts as builder
# copy package-lock.json (mainly) and package.json
WORKDIR /app

COPY package*.json ./

# npm ci for better performance in dependency resolution
RUN npm install
# bundle client
COPY . .
# build with webpack
RUN yarn build

# 2nd stage: lightweight alpine container
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN nginx -t

COPY --from=builder /app/dist /usr/share/nginx/html/