
  FROM node

  ENV SN=1111
  ENV NEXT_PUBLIC_SN=1111
  ENV MESSAGE="good-news"
  ENV NEXT_PUBLIC_MESSAGE="good-news"
  
  WORKDIR /usr/src/app

  COPY package*.json ./
  RUN yarn install

  COPY . .

  RUN yarn build

  ENV NODE_ENV production
  EXPOSE 3003
  CMD ["yarn", "start", "-p", "3003"]
  