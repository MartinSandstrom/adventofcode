var fs = require('fs');

fs.readFile("../../test-data/day-two.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    var presents = data.split(/\r\n/);
    var total = 0;
    for (var i = 0; i < presents.length; i++) {
        total = total + calculatePresent(presents[i]);
    }
    console.log('answer', total);
});

function calculatePresent(inputString){
    if(!inputString) return 0;

    var n = inputString.split('x');
    var total = (2*n[0]*n[1] + 2*n[0]*n[2] + 2*n[2]*n[1]);
    var min = Math.min.apply(Math,n);
    var index = n.indexOf(min.toString());
    n.splice(index, 1);
    var nextMin = Math.min.apply(Math,n);
    var extra = (nextMin*min);
    return total + extra;
}

//console.log('58',calculatePresent('2x3x4'));
//console.log('43',calculatePresent('1x1x10'));
