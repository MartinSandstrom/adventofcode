var fs = require('fs');

fs.readFile("../../test-data/day-nine.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    
    doMagic(data);
    var testString = 'X(3x3)ABC(3x3)ABCY'; 
    console.log('Correct: ', testString);
    console.log('IsCorret:', newString === testString);
    console.log(newString.length);
    
});

var newString = '';

var doMagic = (data) => {
    while(data.length > 0) {
        var first = data[0];
        data = data.substring(1);
        if(first !== '(') {
            newString += first;
        } else {
            var info = first + data.substr(0, data.indexOf(')') + 1);
            data = data.substring(data.indexOf(')') + 1);
            var replaced = info.replace('(', '').replace(')', '');
            var array = replaced.split('x');
            var numberOfChars = array[0];
            var instanses = array[1];
            var stringToReplicate = data.substr(0, numberOfChars);
            for (var i = 0; i < instanses; i++) {
                newString += stringToReplicate;
            }
            data = data.substring(numberOfChars);
        }
    }
    console.log(newString);
};


