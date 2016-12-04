var fs = require('fs');

fs.readFile("../../test-data/day-four.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    console.log('Answer', doMagic(data));
    
});

var doMagic = (data) => {
    var total = 0;
    data.split(/\r|\n/).forEach((room) => {
        var checksum = room.substring(room.indexOf('[')+ 1, room.indexOf(']'));
        var number = room.substring(room.lastIndexOf('-') + 1, room.indexOf('['));
        
        
        
        var combination = room.substring(0, room.lastIndexOf('-'));
        combination = combination.replace(/-/g, '');
        var array = createArray(combination);
        array.sort((a, b) => {
            if(a.value<b.value) return 1;
            else if(a.value>b.value) return -1;
            else {
                if(a.char>b.char){return 1;}
                else if(a.char<b.char){return -1;}
                else return 0;
            }
        });
        
        if(array[0].char === checksum[0] && array[1].char === checksum[1] && array[2].char === checksum[2] && array[3].char === checksum[3] && array[4].char === checksum[4]) {
            total += Number(number);
        }
        console.log(array);
        console.log('-----');

    });
    return total;
};

var createArray = (inputString) => {
    var array = [];
    inputString.split('').forEach((char) => {
        var newObj = {'char': char, 'value': 0};
        if(handle(array, char)) {
            array.push(newObj);
        }
    });
    return array;
};

var handle = (array, char) => {
    for (i = 0; i < array.length; i++) {
        if (array[i].char === char) {
            array[i].value++;
            return false;
        }
    }
    return true;
};

