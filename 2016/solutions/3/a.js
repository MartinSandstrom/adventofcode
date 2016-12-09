var fs = require('fs');

fs.readFile("../../test-data/day-three.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    console.log(doMagic(data.split(/\r|\n/)));
});

var doMagic = data => data.reduce((acc, row) => acc + isTriangle(row.split(' ').filter(Boolean).map(str=>parseInt(str)).sort((a, b) => a - b)), 0);
var isTriangle = numbers => +(numbers[0] + numbers[1] > numbers[2]);
