
  FROM node:alpine
  RUN mkdir -p /usr/src
  WORKDIR /usr/src
  COPY . /usr/src  
  ENV SN=1111
  ENV MESSAGE="good-news"
  COPY package.json yarn.lock ./
  RUN yarn install
  RUN yarn build
  COPY . .
  EXPOSE 3003
  CMD ["yarn", "start"]
  