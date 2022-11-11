var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end('Hello, World!');
});

server.listen(81, '127.0.0.1');
console.log('Il server node è in ascolto sulla porta 81');