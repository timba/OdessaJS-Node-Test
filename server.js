/// <reference path="./nodelib/node.js" />

var path = require('path');
var http = require('http');

var app = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('Take your echo');
});

var io = require('socket.io').listen(app);

io.set('transports', [
     'websocket'
   , 'flashsocket'
   , 'htmlfile'
   , 'xhr-polling'
   , 'jsonp-polling'
]);

var chat = io.of('/chat').on('connection', function (socket) {
    console.log('OH MY~: Connected!');
    socket.on('mess', function (data) {
        console.log('OH MY~: Message!');
        chat.emit('broad', data);
    });
});

app.listen(process.env.PORT || 8080);