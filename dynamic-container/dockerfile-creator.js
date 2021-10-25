const createDockerFile = (payload) => {
  const file = `
  FROM node:alpine

  ENV SN=${payload.sn}
  ENV NEXT_PUBLIC_SN=${payload.sn}
  ENV MESSAGE="${payload.message}"
  ENV NEXT_PUBLIC_MESSAGE="${payload.message}"
  
  WORKDIR /usr/src/app

  COPY package*.json ./
  RUN yarn install

  COPY . .

  RUN yarn build

  ENV NODE_ENV production
  EXPOSE ${payload.port}
  CMD ["yarn", "start", "-p", "${payload.port}"]
  `
  return file
}

module.exports = createDockerFile