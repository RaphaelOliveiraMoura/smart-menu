FROM node:12.16.0

RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home/node/api

WORKDIR /home/node/api

COPY package.json yarn.* ./

USER node

RUN yarn --production

COPY --chown=node:node . .

EXPOSE 3333

RUN yarn build

CMD ["yarn", "start"]
