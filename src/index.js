const hello = require('./hello.js')

document.querySelector('#root').appendChild(hello())

const hiJsonc = require('./hi.jsonc')

console.log('jsonc', hiJsonc)

const banner = require('./banner.txt')

console.log(banner)
