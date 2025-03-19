var http = require('http');
var fs   = require('fs');
var mapp  = require('through2-map');

var url = process.argv[2];

var server = http.createServer(function(request, response) {
    console.log(request.body);
    request.pipe(mapp(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);
});

server.listen(url);