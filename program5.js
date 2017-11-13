var fs = require('fs');
var path = require('path');

// var folder = process.argv[2]
// var ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file);
//     }
//   });
// });
module.exports = function(dir,exten,callback){
  var result = [];
  fs.readdir(dir, function (err, files) {
    if (err) return callback(err);
    files.forEach(function (file) {
      if (path.extname(file) === ('.' +exten)) {
        result.push(file);
      }
    });
    callback(null,result);
  });
};


// var fs = require('fs')
// var path = require('path')

// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err)
//     }

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }