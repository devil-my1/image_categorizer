FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install -g yarn

RUN yarn

COPY . .

RUN yarn run build

EXPOSE 3000

CMD ["npx", "serve", "-s", "build"]
