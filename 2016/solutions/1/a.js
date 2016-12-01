var fs = require('fs');

fs.readFile("../../test-data/day-one.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    doMagic(data);
    console.log('Answer:', x + y);
});

var positions = ['N', 'E', 'S', 'W'];
var index = 0;
var x = 0;
var y = 0;

var doMagic = (data) => {
    var array = data.split(', ');
    array.forEach((input) => {
        var newIndex;
        var isRight = input[0] === 'R';
        if(isRight) {
            index++;
            if(index > 3) {
                index = 0;
            }
        } else {
            index--; 
            if ( index < 0) {
                index = 3;
            }
        }
        var numberToUse = input.replace('R', '').replace('L', '');
        calculateNewPos(numberToUse);
    });
};

var calculateNewPos = (numberToUse) => {
    var position = positions[index];
    if(position === 'N') y += parseInt(numberToUse);
    if(position === 'E') x += parseInt(numberToUse);
    if(position === 'S') y -= parseInt(numberToUse);
    if(position === 'W') x -= parseInt(numberToUse);
}


//console.log(')))', count(')))'));
//console.log('(((', count('((('));
//console.log('((()))', count('((()))'));
//console.log('((((())', count('((((())'));
//console.log('((()))(())', count('((()))(())'));
//console.log('(((()()()()()', count('(((()()()()()'));
