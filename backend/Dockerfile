# Stage 1 - Build process
FROM node:12.16.0-alpine as dependences

WORKDIR /home/node/dependences/

COPY package.json yarn.* ./

RUN yarn --production

# Stage 2 - Production environment
FROM node:12.16.0-alpine as build

WORKDIR /home/node/build

COPY --from=dependences /home/node/dependences/ .

COPY . .

RUN yarn build

# Stage 3 - Running app
FROM node:12.16.0 as running

WORKDIR /home/node/app

COPY --from=build /home/node/build/ .

CMD ["yarn", "start"]
