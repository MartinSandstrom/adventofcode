var crypto = require('crypto');

var md5sum = crypto.createHash('md5');

console.log('answer', test('yzbqklnj'));

function test(input){
    for (var i = 100000; i < 10000000; i++) {
        var test = crypto.createHash('md5').update(input + i).digest("hex");
        if(isCorrect(test)) return i;
    }
}

function isCorrect(input){
    return input.slice(0, 5) == '00000';
}

//console.log('609043', test('abcdef'));
//console.log('1048970', test('pqrstuv'));
