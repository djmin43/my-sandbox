const express = require('express')
const app = express()
const fs = require('fs')
const port = 5000

app.get('/', (req, res) => {
  fs.writeFile('./index.html', 'hello world', (err) => {
    if (err) throw err;
    console.log('created!')
  })
  res.send('hello world')
})

app.post('/create', (req, res) => {
  console.log('hello')
  res.send(req.body)
})

app.listen(port, () => {
  console.log(`port running ${port}`)
})