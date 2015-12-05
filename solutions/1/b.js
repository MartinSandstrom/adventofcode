var fs = require('fs');

fs.readFile("../../test-data/day-one.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }

    console.log('answer', findIndex(data));

});

function findIndex(inputString){
    var total = 0;
    for (var i = 0; i < inputString.length; i++) {
        if(inputString[i] === ')') {
            total--;
        }
        else if( inputString[i] === '('){
            total++;
        }
        if(total < 0) return i + 1;
    }
}



//console.log('1', findIndex(')'));
//console.log('5', findIndex('()())'));
