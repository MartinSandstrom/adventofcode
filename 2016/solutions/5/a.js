var fs = require('fs');
var crypto = require('crypto');

fs.readFile("../../test-data/day-five.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    doMagic(data);
});

var input = 'cxdnnyjw';
var results = '';

var doMagic = (data) => {
    var numberOfFound = 0;
    var i = 0;
    while(numberOfFound < 8) {
        var next = crypto.createHash('md5').update(input + i).digest('hex');
        i++;
        if(next.slice(0, 5) === '00000') {
            results += next[5];
            numberOfFound++;
        }
    }
    console.log(results);
};