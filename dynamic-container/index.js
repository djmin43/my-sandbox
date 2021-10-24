const util = require('util');
const exec = util.promisify(require('child_process').exec);
const createDockerFile = require('./dockerfile-creator')
const createDockerCompose = require('./docker-compose-creator')
const fs = require("fs")
const express = require("express")
const app = express()
const port = 5000

const templateInformation = {
  sn: 1111,
  message: 'good-news',
  port: 3000,
  template: 'basic'
}

app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello world!')
})

app.post('/', async (req, res) => {
  await writeDockerFile(req.body)
  await writeDockerCompose(req.body)
  await runDockerCompose()
  // await buildDocker(req.body)
  // await runDocker(req.body)
  console.log('req', req.body)
  res.send(req.body)
})

app.listen(port, () => {
  console.log(`you are on port ${port}`)
})

const writeDockerFile = (payload) => {
  fs.writeFile(`./template-${payload.template}/Dockerfile`, createDockerFile(payload), function (err) {
    if (err) {
      console.log(err)
      return
    }
  })
}

const writeDockerCompose = (payload) => {
  fs.writeFile(`docker-compose.yaml`, createDockerCompose(payload), function (err) {
    if (err) {
      console.log(err)
      return
    }
  })
}

const buildDocker = (payload) => {
  exec(`docker build -t store-${payload.sn} ./template-${payload.template}/`, (error, stdout, stderr) => {
  if (error) {
    console.log(`exec error: ${error}`)
    return
  }
  console.log(`stdout: ${stdout}`)
  console.error(`stderr: ${stderr}`)
})}

const runDocker = (payload) => {
  exec(`docker run --name store-${payload.sn} -dp ${payload.port}:${payload.port} store-${payload.sn}`, (error, stdout, stderr) => {
    if (error) {
      console.log(`exec error: ${error}`)
      return
    }
    console.log(`stdout: ${stdout}`)
    console.error(`stdout: ${stderr}`)
  })
}

const runDockerCompose = () => {
  exec(`docker-compose up --build`, (error, stdout, stderr) => {
    if (error) {
      console.log(`exec error: ${error}`)
      return
    }
    console.log(`stdout: ${stdout}`)
    console.error(`stdout: ${stderr}`)
  })
}
