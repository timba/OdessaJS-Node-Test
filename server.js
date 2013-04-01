/// <reference path="./nodelib/node.js" />

var path = require('path');
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end('Take your echo, dude! No reply pls');
}).listen(80);