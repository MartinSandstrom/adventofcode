var fs = require('fs');

fs.readFile("../../test-data/day-four.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    console.log(doMagic(data));
});

var doMagic = (data) => {
    var total = 0;
    data.split(/\r|\n/).forEach((room) => {
        var checksum = room.substring(room.indexOf('[')+ 1, room.indexOf(']'));
        var sectorId = room.substring(room.lastIndexOf('-') + 1, room.indexOf('['));
        var combination = room.substring(0, room.lastIndexOf('-'));
        var array = makeDistinctAndCount(combination.replace(/-/g, ''));
        array.sort(sortByValueThenByChar);
        if(array[0].char === checksum[0] && array[1].char === checksum[1] && array[2].char === checksum[2] && array[3].char === checksum[3] && array[4].char === checksum[4]) {
            total += Number(sectorId);
        }
    });
    return total;
};

var sortByValueThenByChar = (a, b) => {
    if(a.value < b.value) return 1;
    else if(a.value > b.value) return -1;
    else {
        if(a.char > b.char) return 1;
        else if(a.char < b.char) return -1;
        else return 0;
    }
};

var makeDistinctAndCount = (inputString) => {
    var array = [];
    inputString.split('').forEach((char) => isInArray(array, char) ? true : array.push({'char': char, 'value': 0}));
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
