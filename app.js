
// local dependency -- use it only in this project
// npm i <packageName>

// global dependency -- use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json  - manifest file (store the information about the project/package)
// npm init(step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items  = [1,[2,[3,[4]]]]
const newitems = _.flattenDeep(items)

console.log(newitems);
console.log("hello people")