var fs = require('fs');

fs.readFile(process.argv[2], function(err, data) {
    if (!err) {
        var string = data.toString();
        var strToArray = string.split('\n');
        
        console.log(strToArray.length - 1);
    };
});