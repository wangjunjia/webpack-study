
const path = require('path')
const miniWebpack = require('./lib/mini-webpack')

const entry = path.join(__dirname, './example/entry.js')
const dast = path.join(__dirname, 'dist/bundle.js')
miniWebpack(entry, dast)









