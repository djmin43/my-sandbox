
  FROM node:alpine AS deps
  WORKDIR /app
  ENV SN=1111
  ENV MESSAGE=good-news
  COPY . .
  EXPOSE 3000
  CMD ["yarn", "dev"]
  