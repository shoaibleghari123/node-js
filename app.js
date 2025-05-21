//npm --version

//local dependancy - use it only in this particular project
//npm i <packageName>

//global dependancy - use it in any project
//npm install -g <packageName>

//package.json file - manifest file (store important info about the project/package)
//manual approach (create package.json in the root, create properties etc)
//npm init (step by step. press enter to skip)
//npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4, [5]]]]]
const item = _.flattenDeep(items)
console.log(item)
