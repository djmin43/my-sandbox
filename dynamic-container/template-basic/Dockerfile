
  FROM node:14-alpine
  
  WORKDIR /usr/src/app

  COPY package*.json ./
  RUN yarn install

  COPY . .

  RUN yarn build

  ENV NODE_ENV production
  