FROM node:alpine

WORKDIR /app

RUN apk -U -i upgrade &&  apk add -i nano

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn

RUN yarn run build

EXPOSE 3000

ENTRYPOINT [ "yarn", "run", "start" ]
