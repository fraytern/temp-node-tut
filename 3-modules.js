//import the modules; variable name needs to match export name from other sheet

const names = require('./4-names.js')
const sayHi = require('./5-utilis.js')
const { items } = require('./6-alternate-syntax.js')

//need to be specific which name / variable I am using
//sayHi(names.John)
//console.log(items)

require('./7-mind-grenade')