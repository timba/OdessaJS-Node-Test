/// <reference path="./nodelib/node.js" />

var path = require('path');
var http = require('http');

var app = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('Take your echo');
});

var io = require('socket.io').listen(app);

io.sockets.on('connection', function (socket) {
    var addr = socket.manager.handshaken[socket.id].address;
    console.log('OH MY~: Connected!');
    socket.on('mess', function (data) {
        console.log('OH MY~: Message! ' + data);
        socket.broadcast.emit('broadcast', data);
        socket.emit('success', data);
    });
});

app.listen(process.env.PORT || 8080);