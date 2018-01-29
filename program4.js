var fs = require('fs');
var filterWord = '.'+process.argv[3];
var result = [];
fs.readdir(process.argv[2],function(err,list){//list,文件夹下文件名的数组
  if(err){
    return console.log(err);
  }else{
    list.forEach(function(filename){
      if(filename.indexOf(filterWord)>0){
        result.push(filename);
      }
    });
    var aa = result.join("\n");
    console.log(aa);
  }
});

// var fs = require('fs');
// var path = require('path');

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

//node program4.js d:/nodejs/workspace/learn-node/ js