var fs = require('fs');
fs.readFile(process.argv[2],'utf8',function(err,data){//第二参数将buffer转成string
  if(err){
    return console.log(err);
  }else{
    console.log(data.split("\n").length-1);
  }
});

//node program2.js program.js读取文件