const comps = (...fns) => {
  fns.forEach(fn => fn())
}

const hello = () => console.log('hello')
const bye = () => console.log('bye')

comps(hello, bye)