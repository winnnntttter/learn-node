var net = require("net");
function fillZero(i){
  return i>9?i:('0'+i);
}

function now(){
  var date = new Date();
  return date.getFullYear()+"-"
    + fillZero(date.getMonth()+1)+"-"
    + fillZero(date.getDate())+" "
    +fillZero(date.getHours())+":"
    +fillZero(date.getMinutes());
}

var server = net.createServer(function(socket){
  socket.end(now()+"\n");
});
server.listen(Number(process.argv[2]));