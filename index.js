var fs = require('fs');
var path = require('path');
var net = require('net');

console.log(net.Socket.prototype);

// let folder = 'myFolder';
// fs.readdir('myFolder', (err, files) => {
//     if(err) throw err;
//     process.chdir(folder);
//     files.forEach((file) => {
//         let ext = path.extname(file);
//         console.log(path.basename(file, path.extname(file)));

//         fs.renameSync(file, path.basename(file, ext) + '_new', + ext);
//     })
// });

