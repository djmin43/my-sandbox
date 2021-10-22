const { exec } = require("child_process")

exec('sh ./my-script.sh', (error, stdout, stderr) => {
  var id = 1234
  if (error) {
    console.log(`exec error: ${error}`)
    return
  }
  console.log(`stdout: ${stdout}`)
  console.error(`stderr: ${stderr}`)
})