var fs = require('fs');

fs.readFile("../../test-data/day-two.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    doMagic(data);
    var cord = x + ',' + y;
    console.log('Answer:', code);
});
var code = '';
var x = 0;
var y = 0;
var options = {
    '1,-1': '1',    
    '1,0': '2',
    '1,1': '3',
    '0,-1': '4',
    '0,0': '5',
    '0,1': '6',
    '-1,-1': '7',
    '-1,0': '8',
    '-1,1': '9'
};

var doMagic = (data) => {
    var tempX = 0;
    var texmpY = 0;
    data.split(/\r|\n/).forEach((row, index) => {
        row.split('').forEach((input) => {
            var tempX = x;
            var tempY = y;
            if(input === 'U') tempY++;
            if(input === 'R') tempX++;
            if(input === 'D') tempY--;
            if(input === 'L') tempX--;
            
            var newPostition = tempY + ',' + tempX;
            if(options[newPostition] > -1) {
                x = tempX;
                y = tempY;
            }
        });
        var cord = y + ',' + x;
        code += options[cord];
    });
};


