FROM node:alpine as build

WORKDIR /web

COPY . /web

ENV PATH /web/node_modules/.bin:$PATH

RUN yarn

RUN yarn build

FROM nginx:alpine

COPY --from=build /web/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY ./ngninx/ngnix.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
