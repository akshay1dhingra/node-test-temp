const { readFile, writeFile } = require('fs') // this is async. async requires a callback

readFile('./content/first.txt','utf8', (err, result) => { // this async function requires a path, encoding, and will return an err and result
    if(err) {
        console.log(err)
        return;
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err)
            return;
        }
        const second = result
        writeFile('./content/result-async.txt', 
        `Hello is the result ${first}, ${second}`, (err, result) => {
            if(err) {
                console.log(err)
                return;
            }
            console.log(result)
        })
    })
}) 