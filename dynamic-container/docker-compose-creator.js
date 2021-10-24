const createDockerCompose = (payload) => {
  const dockerCompose = `
  version: "3.9"
    front-end:
      build: ./template-${payload.template}
      ports:
        - "${payload.port}:${payload.port}"
  `
  return dockerCompose
}

module.exports = createDockerCompose