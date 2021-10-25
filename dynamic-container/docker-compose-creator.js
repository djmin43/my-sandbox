const createDockerCompose = (payload) => {
  const dockerCompose = `
version: "3.9"
services:
  front-end-${payload.sn}:
    build: ./template-${payload.template}
    ports:
      - "${payload.port}:${payload.port}"
  `
  return dockerCompose
}

module.exports = createDockerCompose