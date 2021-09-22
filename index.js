const callBackFunction = (value, func) => {
  console.log(value)
  func(value)
}

const echo = (number) => {
  console.log('callback', number)
}
callBackFunction(1, echo)