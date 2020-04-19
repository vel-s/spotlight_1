// let Transform = require('stream').Transform,
//   tr = new Transform();
// tr._transform = function (chunk, enc, cb) {
//   let string = String(chunk)
//   this.push(string + '(' + string.length + ') ')
//   cb()
// }
// process
// .stdout
// .pipe(tr)
// .pipe(process.stdout)
