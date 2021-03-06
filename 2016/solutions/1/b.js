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
var locations = [];

var doMagic = (data) => {
    data.split(', ').find((input) => {
        
        handleIndex(input);
        if (index > 3) index = 0;            
        else if (index < 0) index = 3;
            
        var numberToUse = input.replace('R', '').replace('L', '');
        if(!calculateNewPos(numberToUse)) return true;    
    });
};

var handleIndex = (input) => input[0] === 'R' ? index++ : index--;

var hasBeenVisited = (newLocation) => locations.indexOf(newLocation) > -1;

var calculateNewPos = (numberToUse) => {
    var position = positions[index];
    var newLocation;
    for (var i = 0; i < numberToUse; i++) {
        if(position === 'N') y++;
        if(position === 'E') x++;
        if(position === 'S') y--;
        if(position === 'W') x--;
        
        newLocation = x + ',' + y;
        if(hasBeenVisited(newLocation)) return false;
        locations.push(newLocation);
    }
    return true;
};


//doMagic('R8, R4, R4, R8');
//console.log('x:', x);
//console.log('y:', y);
//console.log(locations);
//console.log(currentLocation);
//console.log('Answer:', x + y);
