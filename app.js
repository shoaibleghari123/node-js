//CommonJS, every file is module(by default)
//Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');

//console.log(sayHi);

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)