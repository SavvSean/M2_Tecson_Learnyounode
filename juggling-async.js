var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;  
var urls = process.argv.slice(2);

function printData() {
    for (var i = 0; i < results.length; i++) {
        console.log(results[i]);
    }
}

function req(url, index) {
    http.get(url, function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err);
            }

            results[index] = data.toString();
            count++;  

            if (count === urls.length) { 
                printData();
            }
        }));
    });
}

for (var i = 0; i < urls.length; i++) {
    results[i] = "";  
    req(urls[i], i);
}