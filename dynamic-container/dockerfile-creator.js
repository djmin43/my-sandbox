const createDockerFile = (payload) => {
  console.log('createdockerfile', payload)
  const file = `
  FROM node:alpine AS deps
  WORKDIR /app
  ENV SN=${payload.sn}
  ENV MESSAGE="${payload.message}"
  COPY . .
  EXPOSE ${payload.port}
  CMD ["yarn", "dev"]
  `
  return file
}

module.exports = createDockerFile