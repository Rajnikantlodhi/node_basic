// CommonJs - every file is module (by default)
// Module   - Encapsulation Code ( only share minimum )

const nameModule = require('./module')
const sayHi      = require('./utils')
const data      = require('./6-alternative-flavor')
require('./7-mind-generate')

sayHi(nameModule.john)
sayHi(nameModule.peter)
sayHi(data)
console.log(data);
