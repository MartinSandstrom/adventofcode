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

    var first = parseInt(n[0]) * parseInt(n[1]) * parseInt(n[2]);

    var min = Math.min.apply(Math,n);
    var index = n.indexOf(min.toString());
    n.splice(index, 1);
    var nextMin = Math.min.apply(Math,n);

    var second = (min + min + nextMin + nextMin);
    return second + first;
}


//console.log('34',calculatePresent('2x3x4'));
//console.log('14',calculatePresent('1x1x10'));
