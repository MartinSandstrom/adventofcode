var fs = require('fs');
var crypto = require('crypto');

fs.readFile("../../test-data/day-six.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    doMagic(data);
});

var numberOfChars = 8;

var doMagic = (data) => {
    var array = data.split(/\r|\n/);
    var result = '';
    for (var i = 0; i < numberOfChars; i++) {
        var inputString = '';
        var highest = 100;
        var charToUse = '';
        for (var j = 0; j < array.length; j++) {
            inputString += array[j][i];
        }
        var distArray = makeDistinctAndCount(inputString);
        distArray.forEach((a) => {
            if(a.value < highest) {
                highest = a.value;
                charToUse = a.char;
            };
        });
        result += charToUse;
        
    }
    console.log(result);
};

var makeDistinctAndCount = (inputString) => {
    var array = [];
    inputString.split('').forEach((char) => isInArray(array, char) ? true : array.push({'char': char, 'value': 0}));
    return array;
};

var isInArray = (array, char) => {
    return array.find((obj) => {
        if (obj.char === char) {
            obj.value++;
            return true;
        }
    });
};
