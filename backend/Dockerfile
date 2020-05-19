FROM node:12.16.0

WORKDIR /home/api

COPY package.json yarn.* ./

RUN yarn --production

COPY . .

RUN yarn build

EXPOSE 3333

CMD ["yarn", "start"]
