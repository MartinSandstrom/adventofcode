var fs = require('fs');

fs.readFile("../../test-data/day-two.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    doMagic(data);
    console.log('Answer:');
});

var doMagic = (data) => {
    console.log('woho');
};
