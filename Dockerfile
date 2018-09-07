FROM nginx:latest
LABEL Name=zoomoid.de Version=1.0.0

ADD . /var/www/html