const fs = require('fs');
const path = require('path');

const list = []

// function readDir (dir, filter, callback) {
//     fs.readdir(dir, function (err, files) {
//         if (err){return callback(err) }
//         files.forEach(file => {
//             if (path.extname(file) == '.'+filter) {
//                 // console.log(file)
//                 callback(null, file);
//                 return;
//             }
//         })
//     })
// }
module.exports = function (dir, filter, callback) {
    fs.readdir(dir, function (err, files) {
        if (err){
            return callback(err);  
        }
        else{
            files.forEach(file => {
                if (path.extname(file) == '.'+filter) {
                    // console.log(file)
                    list.push(file)
                    
                }
            })
            return callback(null, list) //call back return dengan hasil
        }
    })
}

//dir = first argument dari make-it-module, dimana berisi path direktori yang akan dibaca
//filter = extensi yang akan difilter, tanpa tanda titik, argument kedua dari make-it-module
//readdir, funsgi dari fs/filesystem
//err = menampung error
//files = menampung file2 yang ada di direktori

//akan diiterasi sebanyak files untuk setiap file
//ketika extname dari file sama dengan filter
//maka file tersebut akan dipush ke array list

//kemudian return callback dengan null untuk error dan array list untuk data yang dikembalikan