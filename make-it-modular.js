const myModule = require('./my-module');

myModule(process.argv[2], process.argv[3], function(err, response){
    if (err) {
        console.log(err)
    }
    else {
        for (x in response) {
            console.log(response[x])
        }
    }
})
// console.log("mmm")
// myModule.print(process.argv[2])
// console.log()
// console.log(file)