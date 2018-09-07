FROM nginx:latest
LABEL Name=zoomoid.de Version=1.0.0

ADD . /var/www/html
# COPY nginx.conf /etc/nginx/sites-available/site.conf
# RUN mkdir /etc/nginx/sites-enabled
# RUN ln -s /etc/nginx/sites-available/site.conf /etc/nginx/sites-enabled/site.conf