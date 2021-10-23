const createDockerFile = (payload) => {
  const file = `
  FROM node:alpine AS deps
  WROKDIR /app
  ENV SN=${payload.sn}
  ENV MESSAGE=${payload.message}
  COPY . .
  EXPOSE ${payload.port}
  CMD ["yarn", "dev"]
  `
  return file
}

module.exports = createDockerFile