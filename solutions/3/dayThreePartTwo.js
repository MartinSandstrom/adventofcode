var fs = require('fs');

fs.readFile("../../test-data/day-three.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    console.log('answer', runTest(data));
});

function runTest(data){
    positions = [{x:0, y:0}];
    var santaRoute = '';
    var roboRoute = '';

    for (var i = 0; i < data.length; i++) {
        if(i % 2 === 0){
            santaRoute += data[i];
        }
        else{
            roboRoute += data[i];
        }
    }
    caculateHouses(santaRoute);
    caculateHouses(roboRoute);

    return positions.length;
}


var positions = [{x:0, y:0}];


function caculateHouses(inputString){

    var position = {x: 0, y: 0};
    for (var i = 0; i < inputString.length; i++) {
        var newObj = {x:0, y:0};
        switch (inputString[i]) {
        case '>':
            position.x++;
            newObj = {x:position.x, y:position.y};
            break;
        case '^':
            position.y++;
            newObj = {x:position.x, y:position.y};
            break;
        case '<':
            position.x--;
            newObj = {x:position.x, y:position.y};
            break;
        case 'v':
            position.y--;
            newObj = {x:position.x, y:position.y};
            break;
        }
        addNewHouse(newObj);
    }
    return positions.length;
}

function addNewHouse(obj){

    if(isCounted(obj)){
        return;
    }
    else{
        positions.push(obj);
    }
}

function isCounted(obj){
    var found = false;
    for (var i = 0; i < positions.length; i++) {
        if(positions[i].x === obj.x && positions[i].y === obj.y){
            found = true;
            break;
        }
    }
    return found;
}


//console.log('3',runTest('^v'));
//console.log('3',runTest('^>v<'));
//console.log('11',runTest('^v^v^v^v^v'));
//console.log('5', runTest('^^^^^^^^'))
