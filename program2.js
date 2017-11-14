var fs = require('fs');
var obj = fs.readFileSync(process.argv[2]);
var result = obj.toString().split("\n").length-1;
console.log(result);

//node program2.js program.js读取文件