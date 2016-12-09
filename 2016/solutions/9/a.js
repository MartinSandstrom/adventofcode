var fs = require('fs');

fs.readFile("../../test-data/day-nine-ex.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    
    doMagic(data);
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
            var array = info.split('x');
            var numberOfChars = array[0];
            var instanses = array[1];
            var dataToUse = '';
        }
    }
    console.log(newString);
};


