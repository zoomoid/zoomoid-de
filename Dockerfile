FROM node:latest AS builder
WORKDIR .
COPY . .
RUN npm install
RUN npm run build
COPY ./dist/ .

FROM nginx:latest
LABEL Name=zoomoid.de Version=1.0.0
WORKDIR .
COPY --from=builder . .
ADD . /usr/share/nginx/html
