const os = require('os')

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMeme: os.freemem()
}

console.log(currentOS)