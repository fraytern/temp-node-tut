const path = require('path')

console.log(path.sep)

//joins these into single file path
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

//logs base file's data
const base = path.basename(filePath)
console.log(base)

//absolute path to test.txt
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)