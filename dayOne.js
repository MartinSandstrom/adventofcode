var fs = require('fs');

fs.readFile("test-data/day-one.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    console.log('answer', count(data));
});


function count(data){
    var result = 0;
    for (var i = 0; i < data.length; i++) {
        if(data[i] === ')') {
            result--;
        }
        else if( data[i] === '('){
            result++;
        }
    }
    return result;
}

//console.log(')))', count(')))'));
//console.log('(((', count('((('));
//console.log('((()))', count('((()))'));
//console.log('((((())', count('((((())'));
//console.log('((()))(())', count('((()))(())'));
//console.log('(((()()()()()', count('(((()()()()()'));
