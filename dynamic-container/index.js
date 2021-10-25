const util = require('util');
const exec = util.promisify(require('child_process').exec);
const createDockerFile = require('./dockerfile-creator')
const createDockerCompose = require('./docker-compose-creator')
const fs = require("fs")
const express = require("express")
const app = express()
const port = 5000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('hello world!')
})

app.post('/', async (req, res) => {
  console.log(req.body)
  await writeDockerFile(req.body)
  await writeDockerCompose(req.body)
  await runDockerCompose(req.body)
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

const runDockerCompose = (payload) => {
  exec(`docker-compose --project-name testing-${payload.sn} up -d`, (error, stdout, stderr) => {
    if (error) {
      console.log(`exec error: ${error}`)
      return
    }
    console.log(`stdout: ${stdout}`)
    console.error(`stdout: ${stderr}`)
  })
}
