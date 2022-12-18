/*const {readFile, writeFile} = require('fs')
const { resourceLimits } = require('worker_threads')


//with async function, as soon as task started, it is offloaded to make way for other tasks while it finishes
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if (err){
        console.log(err)
        return
    }
   const first = result;
   readFile('./content/second.txt', 'utf8', (err,result)=>{
    if (err){
        console.log(err)
        return
    }
    const second = result; 
    writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`, 
    (err, result)=>{
        if (err){
            console.log(err)
            return
        }
        console.log('done')
    })
   })
}
)

console.log('starting next task') */

const {readFile, writeFile} = require('fs');

readFile('./content/second.txt','utf8', (err, result)=>{
    if (err){
        console.log(err)
        return
    }
    console.log(result)    
})