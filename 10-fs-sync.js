const { readFileSync, writeFileSync } = require('fs') //this is synchronis 
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8') //this reads the content of the file given in from the path in the first argument. second argument is the encoding
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

writeFileSync('./content/result-sync.txt', 
`Hello is the result ${first}, ${second}`, // writeFileSync creates a file for us. first argument is the path, second argument is the files content,
{flag: 'a'} // this will append information to the file
) 

console.log('done with this task')