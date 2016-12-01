var fs = require('fs');

fs.readFile("../../test-data/day-one.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    
    doMagic(data);
    console.log(currentLocation);
    console.log('Answer:', x + y);
    
});

var positions = ['N', 'E', 'S', 'W'];
var index = 0;
var x = 0;
var y = 0;
var locations = [];
var currentLocation = '0,0';

var doMagic = (data) => {
    var array = data.split(', ');
    array.find((input) => {
        
        handleIndex(input[0]);
        
        if(index > 3) {
            index = 0;            
        } else if (index < 0) {
            index = 3;
        }
            
        var numberToUse = input.replace('R', '').replace('L', '');
        if(!calculateNewPos(numberToUse)){
            return true;    
        }
    });
};

var handleIndex = (input) => {
    return input === 'R' ? index++ : index--;
};

var calculateNewPos = (numberToUse) => {
    var position = positions[index];
    var newLocation;
    var i;
    switch (position) {
        case 'N':
            for (i = 0; i < numberToUse; i++) {
                y++;
                newLocation = x + ',' + y;
                if(hasBeenVisited(newLocation)) {
                    return false;
                }
            }
            break;
        case 'E':
            for (i = 0; i < numberToUse; i++) {
                x++;
                newLocation = x + ',' + y;
                if(hasBeenVisited(newLocation)) {
                    return false;
                }
            }
            break;
        case 'S':
            for (i = 0; i < numberToUse; i++) {
                y--;
                newLocation = x + ',' + y;
                if(hasBeenVisited(newLocation)) {
                    return false;
                }
            }
            break;
        default:
            for (i = 0; i < numberToUse; i++) {
                x--;
                newLocation = x + ',' + y;
                if(hasBeenVisited(newLocation)) {
                    return false;
                }
            }
            break;
    }
    return true;
};

var hasBeenVisited = (currentLocation) => {
    if(locations.indexOf(currentLocation) > -1) {
        return true;
    }
    locations.push(currentLocation);
};

//doMagic('R8, R4, R4, R8');
//console.log('x:', x);
//console.log('y:', y);
//console.log(locations);
//console.log(currentLocation);
//console.log('Answer:', x + y);


//console.log(')))', count(')))'));
//console.log('(((', count('((('));
//console.log('((()))', count('((()))'));
//console.log('((((())', count('((((())'));
//console.log('((()))(())', count('((()))(())'));
//console.log('(((()()()()()', count('(((()()()()()'));
