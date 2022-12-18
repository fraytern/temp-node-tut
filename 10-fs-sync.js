/*since it's syncronous, does tasks in order

const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second);

writeFileSync(
    './content/result-sync.txt',
    `Here is the result : ${first}, ${second}`, 
    {flag: 'a'}
)

console.log('done with task');
console.log('starting new task'); */

const {readFileSync, writeFileSync} = require('fs');
const first = readFileSync('./content/subfolder/test.txt', 'utf8');

writeFileSync(
    './content/result-sync.txt',
    'Here is the today 12/18/2022'
);