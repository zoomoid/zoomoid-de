FROM node:latest AS builder
WORKDIR .
COPY . .
RUN npm install
RUN npm run build

FROM nginx:latest
LABEL Name=zoomoid.de Version=1.0.0
WORKDIR .
COPY . .
COPY --from=builder ./dist/ .
ADD . /usr/share/nginx/html
