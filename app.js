var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

var logger = require('./logger');
app.use(logger);

app.use(express.static('public'));

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('colors', function(color){
    // console.log('This is the color: ' + color);
    io.emit('colors', color);
  });
});

http.listen(port, function() {
  console.log('listening on port: ' + port);
});
