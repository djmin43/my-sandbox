const { exec } = require("child_process")
const createDockerFile = require('./file-creator')
const fs = require("fs")
const express = require("express")
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('hello world!')
})

app.listen(port, () => {
  console.log(`you are on port ${port}`)
})

console.log('hello')
// var id = 1234

// fs.writeFile('./docker-folder/Dockerfile', createDockerFile(id), function (err) {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('yay!')
//   runDocker(id)
// })


// const runDocker = (id) => {
//   exec(`docker build -t testing-${id} ./docker-folder`, (error, stdout, stderr) => {
//   if (error) {
//     console.log(`exec error: ${error}`)
//     return
//   }
//   console.log(`stdout: ${stdout}`)
//   console.error(`stderr: ${stderr}`)
// })}