var express = require('express');

var server = express();

server.configure(function(){
  server.use(express.static(__dirname + '/public_html'));
});

console.log('server up');
server.listen(3000);