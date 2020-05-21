FROM node:12.16.0-alpine AS build

WORKDIR /home/web

ARG REACT_APP_API_URL=https://afternoon-earth-40972.herokuapp.com/

COPY package.json yarn.* ./

RUN yarn --production

COPY . .

RUN yarn run build

FROM nginx:alpine

COPY --from=build /home/web/ngninx/ngnix.template.conf /etc/nginx

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /home/web/build /usr/share/nginx/html

#!/bin/bash

CMD envsubst '\$PORT' < /etc/nginx/ngnix.template.conf > /etc/nginx/nginx.conf && cat /etc/nginx/nginx.conf && nginx -g 'daemon off;'
