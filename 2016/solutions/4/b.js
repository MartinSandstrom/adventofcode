var fs = require('fs');

fs.readFile("../../test-data/day-four.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    doMagic(data);
});

var alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var doMagic = (data) => {
    data.split(/\r|\n/).forEach((room) => {
        var checksum = room.substring(room.indexOf('[')+ 1, room.indexOf(']'));
        var number = room.substring(room.lastIndexOf('-') + 1, room.indexOf('['));    
        var combination = room.substring(0, room.lastIndexOf('-'));
        var array = makeDistinctAndCount(combination.replace(/-/g, ''));
        array.sort(sortByValueThenChar);
        
        if(array[0].char === checksum[0] && array[1].char === checksum[1] && array[2].char === checksum[2] && array[3].char === checksum[3] && array[4].char === checksum[4]) {
            giffMeMessage(combination, number);
        }
    });
};

var giffMeMessage = (combination, number) => {
    var message = '';
    combination.split('').forEach((char) => message += getCorrectNumer(char, number));
    if(message.indexOf('north') > -1) console.log(number);
};

var sortByValueThenChar = (a, b) => {
    if(a.value < b.value) return 1;
    else if(a.value > b.value) return -1;
    else {
        if(a.char > b.char)return 1;
        else if(a.char < b.char)return -1;
        else return 0;
    }
};

var getCorrectNumer = (char, number) => {
    var index = alfabet.indexOf(char);
    for (var i = 0; i < number; i++) {
        index++;
        if(index > alfabet.length -1) index = 0;
    }
    return alfabet[index];
};

var makeDistinctAndCount = (inputString) => {
    var array = [];
    inputString.split('').forEach((char) => !isInArray(array, char) ? array.push({'char': char, 'value': 0}) : false);
    return array;
};

var isInArray = (array, char) => {
    return array.find((obj) => {
        if (obj.char === char) {
            obj.value++;
            return true;
        }
    });
};
