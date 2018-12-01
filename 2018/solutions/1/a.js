var fs = require('fs');

fs.readFile("../../test-data/1.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    console.log('answer', doMagic(data));
});

const doMagic = (input) => input.split('\n').reduce((acc, curr) => eval(`acc ${curr}`), 0)
