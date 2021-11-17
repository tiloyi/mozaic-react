################################################################################

FROM docker.art.lmru.tech/nginx:1.19.3 as runtime

COPY storybook-static /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
