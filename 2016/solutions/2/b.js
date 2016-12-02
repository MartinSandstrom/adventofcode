var fs = require('fs');

fs.readFile("../../test-data/day-two.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    doMagic(data);
    console.log('Answer:', code);
    console.log('Correct:', '5DB3');
});
var code = '';
var x = -2;
var y = 0;
var options = {
    '2,0': '1',
    '1,-1': '2',    
    '1,0': '3',
    '1,1': '4',
    '0,-2': '5',
    '0,-1': '6',
    '0,0': '7',
    '0,1': '8',
    '0,2': '9',
    '-1,-1': 'A',
    '-1,0': 'B',
    '-1,1': 'C',
    '-2,0': 'D'
};

/*
New Awesome Map
    1
  2 3 4
5 6 7 8 9
  A B C 
    D
*/
var doMagic = (data) => {
    var tempX = 0;
    var texmpY = 0;
    data.split(/\r|\n/).forEach((row) => {
        row.split('').forEach((input) => {
            var tempX = x;
            var tempY = y;
            if(input === 'U') tempY++;
            if(input === 'R') tempX++;
            if(input === 'D') tempY--;
            if(input === 'L') tempX--;
            
            var newPostition = tempY + ',' + tempX;
            console.log(newPostition);
            console.log(options[newPostition]);
            if(options[newPostition] > -1 || ['A','B','C','D'].indexOf(options[newPostition]) > -1) {
                x = tempX;
                y = tempY;
                console.log(y + ',' + x);
                
            }
            console.log('----');
        });
        var cord = y + ',' + x;
        code += options[cord];
    });
};


