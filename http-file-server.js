var http = require('http');
var fs = require('fs');

var url = process.argv[2];
var callBack = process.argv[3];

var server = http.createServer(function(request, response) {
    var stream = fs.createReadStream(callBack);
    stream.pipe(response);
});

server.listen(url);