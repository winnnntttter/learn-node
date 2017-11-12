var fs = require('fs');
var obj = fs.readFileSync(process.argv[2]);
var result = obj.toString().split("\n").length-1;
console.log(result);