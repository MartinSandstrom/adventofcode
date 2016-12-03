var fs = require('fs');

fs.readFile("../../test-data/day-three.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    doMagic(data);
    console.log(numberOfTriangles);
});

var numberOfTriangles = 0;

var doMagic = (data) => data.split(/\r|\n/).forEach((row) => isTriangle(row.split(' ').filter(Boolean).sort((a, b) => a - b)) ? numberOfTriangles++ : true);

var isTriangle = (numbers) => parseInt(numbers[0]) + parseInt(numbers[1]) > parseInt(numbers[2]);

