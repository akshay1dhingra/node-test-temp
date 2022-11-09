const path = require('path')
console.log(path.sep) // we should get '/'

const filePath = path.join('/content', 'subfolder', 'text.txt')
console.log(filePath) // this will join the file paths together. we should get '/content/subfolder/text.txt'

const base = path.basename(filePath)
console.log(base) // this will return the base path. we should get '/text.txt'

const absolutePath = path.resolve(__dirname, 'content', 'subfolder', 'text.txt')
console.log(absolutePath) // this will return the absolute path. we should get /Users/akshay.dhingra/Documents/code/node tutorials/content/subfolder/text.txt