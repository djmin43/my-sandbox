const createDockerFile = (sn) => {
  const file = `
  FROM nginx
  ENV SN=${sn}
  COPY . .
  EXPOSE 85
  `
  return file
}

module.exports = createDockerFile