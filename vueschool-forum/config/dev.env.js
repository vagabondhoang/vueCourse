'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

console.log(process.env)

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
