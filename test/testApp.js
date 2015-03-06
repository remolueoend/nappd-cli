var http = require('http');
var fs = require('fs');

console.info('Starting server...');

http.createServer(function (req, res) {
    console.info(req.method + ' ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Server is running\n');
}).listen(9876);
