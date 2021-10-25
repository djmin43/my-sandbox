const createDockerCompose = (payload) => {
  const dockerCompose = `
version: "3.9"
services:
  front-end:
    container_name: front-end-${payload.sn}
    build: ./template-${payload.template}
    ports:
      - "${payload.port}:${payload.port}"
    environment:
      NEXT_PUBLIC_SN: ${payload.sn}
      SN: ${payload.sn}
      NEXT_PUBLIC_MESSAGE: "${payload.message}"
    command: yarn start -p ${payload.port}
  `
  return dockerCompose
}

module.exports = createDockerCompose