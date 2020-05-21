# Stage 1 - Build process
FROM node:12.16.0-alpine as build

WORKDIR /home/api

COPY package.json yarn.* ./

RUN yarn --production

COPY . .

RUN yarn build

# Stage 2 - Production environment
FROM node:12.16.0-alpine as release

WORKDIR /home/node/build

COPY --from=build /home/api ./

CMD ["yarn", "start"]
