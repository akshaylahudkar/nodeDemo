const names = require('./4-module')
const sayHi=require('./5-utils')

console.log(names)

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)

const data=require('./alternative-flavor') 

console.log(data)

require('./mind-grenade')