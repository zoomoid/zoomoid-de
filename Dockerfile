FROM node:14-alpine AS builder

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

RUN yarn generate

FROM nginx:alpine AS server

COPY --from=builder /app/dist /usr/share/nginx/html
