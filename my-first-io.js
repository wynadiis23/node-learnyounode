const fs = require('fs');
// let a = ''
// a = fs.readFileSync('/home/adisaputra/Developtment/node-exploration/my-first-io.js')

const str = fs.readFileSync(process.argv[2]).toString().split(/\n/)

console.log(str.length-1)
// console
// console