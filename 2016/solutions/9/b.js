var fs = require('fs');

fs.readFile("../../test-data/day-nine.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    console.log(doMagic(data));
});

var doMagic = (data) => {
    var length = data.length;
    for (var i = 0; i < data.length; i++) {
        if (data[i] !== '(') continue;
        var match = data.substr(i).match(/^\((\d+)x(\d+)\)/);
        var matchLength = parseInt(match[1], 10);
        var times = parseInt(match[2], 10);
        var start = i + match[0].length;
        var matchStr = data.substr(start, matchLength);
        var decompressedLength = doMagic(matchStr);
        length += decompressedLength * times - matchStr.length - match[0].length;
        i = start + matchStr.length - 1;
    }
    return length;
};


