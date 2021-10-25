const createDockerCompose = (payload) => {
  const dockerCompose = `
version: "3.9"
services:
  front-end-${payload.sn}:
    build: ./template-${payload.template}
    ports:
      - "${payload.port}:${payload.port}"
    environment:
      - SN=${payload.sn}
      - NEXT_PUBLIC_SN=${payload.sn}
      - MESSAGE="${payload.message}"
      - NEXT_PUBLIC_MESSAGE="${payload.message}"
    command: yarn dev -p ${payload.port}
  `
  return dockerCompose
}

module.exports = createDockerCompose