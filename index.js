const fs = require('fs');

const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is how we know about the avocado: ${textIn}.\n Created on ${Date.now()}`
console.log(textOut);
fs.writeFileSync('./txt/output.txt', textOut)
console.log('File written!')