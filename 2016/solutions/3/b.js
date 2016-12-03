var fs = require('fs');

fs.readFile("../../test-data/day-three.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    doMagic(data);
    console.log(numberOfTriangles);
});

var numberOfTriangles = 0;


var doMagic = (data) => {
    var inputs = data.split(/\r|\n/);
    inputs.forEach((part, index, theArray) => theArray[index] = part.split(' ').filter(Boolean));
    for (var i = 0; i < inputs.length; i += 3) {
        
        var a = inputs[i][0];
        var b = inputs[i][1];
        var c = inputs[i][2];
        
        var d = inputs[i+1][0];
        var e = inputs[i+1][1];
        var f = inputs[i+1][2];
        
        var g = inputs[i+2][0];
        var h = inputs[i+2][1];
        var j = inputs[i+2][2];
        
        var first = [a,d,g].sort((one, two) => one - two);
        var second = [b,e,h].sort((one, two) => one - two);
        var third = [c,f,j].sort((one, two) => one - two);
        
        if(isTriangle(first)) numberOfTriangles++;
        if(isTriangle(second)) numberOfTriangles++;
        if(isTriangle(third)) numberOfTriangles++;
    }
};

var isTriangle = (numbers) => parseInt(numbers[0]) + parseInt(numbers[1]) > parseInt(numbers[2]);

