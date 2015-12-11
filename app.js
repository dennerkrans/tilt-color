var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 3000;

app.use(express.static(__dirname + '/'));

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('colors', function(color){
    console.log('This is the color: ' + color);
    io.emit('colors', color);
  });
});

http.listen(port, function() {
  console.log('listening on port: ' + port);
});
