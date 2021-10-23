const { exec } = require("child_process")
const createDockerFile = require('./file-creator')
const fs = require("fs")
const express = require("express")
const app = express()
const port = 5000

const templateInformation = {
  sn: 1111,
  message: 'good news',
  port: 3005,
  template: 'basic'
}

app.use(express.json())

app.get('/', (req, res) => {
  console.log('req', req)
  res.send('hello world!')
})

app.post('/', (req, res) => {
  writeFile(req.body)
  console.log('req', req.body)
  res.send('hello')
})

app.listen(port, () => {
  console.log(`you are on port ${port}`)
})

const writeFile = (payload) => {
  fs.writeFile(`./template-${payload.template}', createDockerFile(payload)`, function (err) {
    if (err) {
      console.log(err)
      return
    }
    console.log('yay!')
    buildDocker(payload)
  })
}

const buildDocker = (payload) => {
  exec(`docker build -t store-${payload.sn} ./template-${payload.template}`, (error, stdout, stderr) => {
  if (error) {
    console.log(`exec error: ${error}`)
    return
  }
  console.log(`stdout: ${stdout}`)
  console.error(`stderr: ${stderr}`)
})}