var fs = require('fs');

fs.readFile("../../test-data/day-one.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    console.log('answer', doMagic(data));
});


function doMagic(data){
    console.log(data);
}

//console.log(')))', count(')))'));
//console.log('(((', count('((('));
//console.log('((()))', count('((()))'));
//console.log('((((())', count('((((())'));
//console.log('((()))(())', count('((()))(())'));
//console.log('(((()()()()()', count('(((()()()()()'));
