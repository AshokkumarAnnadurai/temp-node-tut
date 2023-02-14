const {readFileSync,writeFileSync} = require('fs')
console.log('Start');
const first = readFileSync('./content/first.txt','utf-8')
const second = readFileSync('./content/second.txt','utf-8')
writeFileSync('./content/result.txt', `here the result ${first} ${second} `, {flag : 'a'})
console.log('done the task');
console.log('starting the next one');