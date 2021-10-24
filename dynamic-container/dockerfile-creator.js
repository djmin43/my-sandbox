const createDockerFile = (payload) => {
  console.log('createdockerfile', payload)
  const file = `
  FROM node:alpine
  RUN mkdir -p /usr/src
  WORKDIR /usr/src
  COPY . /usr/src  
  ENV SN=${payload.sn}
  ENV MESSAGE="${payload.message}"
  COPY package.json yarn.lock ./
  RUN yarn install
  RUN yarn build
  COPY . .
  EXPOSE ${payload.port}
  CMD ["yarn", "start"]
  `
  return file
}

module.exports = createDockerFile