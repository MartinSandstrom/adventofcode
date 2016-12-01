var fs = require('fs');

fs.readFile("../../test-data/day-one.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    
    doMagic(data);
    console.log(locations);
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
        var newIndex;
        var isRight = input[0] === 'R';
        if(isRight) {
            index++;
            if(index > 3) {
                index = 0;
            }
        } else {
            index--; 
            if ( index < 0) {
                index = 3;
            }
        }
        var numberToUse = input.replace('R', '').replace('L', '');
        if(!calculateNewPos(numberToUse)){
            return true;    
        }
    });
};

var calculateNewPos = (numberToUse) => {
    var position = positions[index];
    var newLocation;
    var i;
    if(position === 'N') {
        for (i = 0; i < numberToUse; i++) {
            y++;
            newLocation = x + ',' + y;
            if(hasBeenVisited(newLocation)) {
                return false;
            }
        }
    }
    if(position === 'E'){
        for (i = 0; i < numberToUse; i++) {
            x++;
            newLocation = x + ',' + y;
            if(hasBeenVisited(newLocation)) {
                return false;
            }
        }
    } 
    if(position === 'S'){
        for (i = 0; i < numberToUse; i++) {
            y--;
            newLocation = x + ',' + y;
            if(hasBeenVisited(newLocation)) {
                return false;
            }
        }
    } 
    if(position === 'W') {
        for (i = 0; i < numberToUse; i++) {
            x--;
            newLocation = x + ',' + y;
            if(hasBeenVisited(newLocation)) {
                return false;
            }
        }
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
