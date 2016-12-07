var fs = require('fs');
var crypto = require('crypto');

fs.readFile("../../test-data/day-seven.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    doMagic(data);
});

var doMagic = (data) => {
    var ips = data.split(/\r|\n/);
    var total = 0;
    ips.forEach((ip) => {
        var array = ip.split('');
        var numberOfHyper = ip.split('[').length;
        var isAb = false;
        var isHy = false;
        for (var i = 0; i < numberOfHyper; i++) {
            var stop = array.indexOf('[');
            if(stop === -1) stop = array.length;
            var first = array.splice(0, stop).join('');
            var hyper = array.splice(0, array.indexOf(']') + 1).join('').replace('[', '').replace(']', '');
            
            if(isAbba(first)) isAb = true;
            if(isAbba(hyper)) {
                isHy = true;
                return false;
            }
        }
        if(isAb && !isHy) total += 1;
    });
    console.log('Total', total);
};

var isAbba = (string) => string.split('').find((char, i) =>  {
    return string[i] === string[i + 3] && string[i + 1] === string[i + 2] && string[i] !== string[i + 1];
});