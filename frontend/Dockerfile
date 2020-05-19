FROM node:12.16.0

RUN useradd -ms /bin/bash web

RUN mkdir -p /home/web/app/node_modules && chown -R web:web /home/web

WORKDIR /home/web/app

COPY package.json yarn.* ./

USER web

RUN YARN_CACHE_FOLDER=/home/web yarn --production

COPY --chown=web:web . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
