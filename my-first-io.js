var fs = require('fs');

var data = fs.readFileSync(process.argv[2]);
var string = data.toString();
var strToArray = string.split('\n');

console.log(strToArray.length - 1);
