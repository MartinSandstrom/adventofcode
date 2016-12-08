var fs = require('fs');

fs.readFile("../../test-data/day-eight.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            var string = x + ',' + y;
            list[string] = '.';
        }
    }
    doMagic(data);
});

var total = 0;
var width = 50;
var height= 6;
var list = {};

var doMagic = (data) => {
     data.split(/\r|\n/).forEach((row) => {
         var split = row.split(' ');
         if(split[0] === 'rotate' ) {
             if(split[1] === 'row') {
                 rotateRow(split[2], split[4]);
             } else {
                 rotateCol(split[2], split[4]);
             }
         }
         else rect(split[1]);
    });
    getTotal();
    console.log('Total', total);
};

var getTotal = () => {
    total = 0;
    Object.keys(list).forEach(function(key,index) {
        if(list[key] === '#') total++;
    });
};

var rotateCol = (rowOrCol, numberOfTimes) => {
    var copy = JSON.parse(JSON.stringify(list));
    var x = rowOrCol.split('=')[1];
    for (var y = 0; y < height; y++) {
        var prevY = y;
        for (var i = 0; i < numberOfTimes; i++) {
            prevY--;
            if(prevY < 0) prevY = height - 1;
        }
        list[x + ',' + y] = copy[x + ',' + prevY];
    }
};

var rotateRow = (rowOrCol, numberOfTimes) => {
    var copy = JSON.parse(JSON.stringify(list));
    var y = rowOrCol.split('=')[1];
    for (var x = 0; x < width; x++) {
        var prevX = x;
        for (var i = 0; i < numberOfTimes; i++) {
            prevX--;
            if(prevX < 0) prevX = width - 1;
        }
        list[x + ',' + y] = copy[prevX + ',' + y];
    }
};

var rect = (input) => {
    var split = input.split('x');
    var a = split[0];
    var b = split[1];
    for (var x = 0; x < a; x++) {
        for (var y = 0; y < b; y++) {
            var string = x + ',' + y;
            list[string] = '#';
        }
    }
};

