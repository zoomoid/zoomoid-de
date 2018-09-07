FROM nginx:latest
LABEL Name=zoomoid.de Version=1.0.0

ADD . /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf