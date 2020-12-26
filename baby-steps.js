// console.log(process.argv)
'use strict'
let i = 2
let sum = 0
// console.log(process.argv.length)
for (i; i < process.argv.length; i++) {
    sum = sum + parseInt(process.argv[i])
}
console.log(sum)