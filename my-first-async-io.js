const fs = require('fs');
let count = undefined

fs.readFile(process.argv[2], 'utf8', function lineData(err, data) {
    if (err) return console.log(err);
    count = data.split(/\n/)
    console.log(count.length-1)
});