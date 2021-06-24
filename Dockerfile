# 1st stage build client
FROM node:lts AS builder
# copy package-lock.json (mainly) and package.json
WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./
RUN yarn install

# bundle client
COPY . .
RUN yarn build

# 2nd stage: lightweight alpine container
FROM nginx:alpine AS zoomoid-de

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN nginx -t

COPY --from=builder /app/dist /usr/share/nginx/html/