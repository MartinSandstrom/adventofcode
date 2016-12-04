var fs = require('fs');

fs.readFile("../../test-data/day-five.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    doMagic(data);
    console.log(numberOfTriangles);
});

var doMagic = (data) => {
    console.log('hej');
}