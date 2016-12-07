var fs = require('fs');
var crypto = require('crypto');

fs.readFile("../../test-data/day-seven.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    doMagic(data);
});


var numberOfChars = 8;

var doMagic = (data) => {
    var ips = data.split(/\r|\n/);
    var total = 0;
    ips.forEach((ip) => {
        var array = ip.split('');
        var numberOfHyper = ip.split('[').length - 1;
        var isAb = false;
        var isHy = false;
        for (var i = 0; i < numberOfHyper + 1; i++) {
            var stop = array.indexOf('[');
            if(stop === -1) stop = array.length;
            //console.log('Stop: ', stop);
            var first = array.splice(0, stop).join('');
            var hyper = array.splice(0, array.indexOf(']') + 1).join('').replace('[', '').replace(']', '');
            //console.log('First: ', first);
            //console.log('Hyper: ', hyper);
            //console.log('Array: ', array);
            if(isAbba(first)) { 
                isAb = true;
            } 
            if(isAbba(hyper)) {
                isHy = true;
                return false;
            }
        }
        
        if(isAb && !isHy) {
            total += 1;
        }
    });
    console.log('Total', total);
};

var isAbba = (string) => {
    var result = false;
    for (var i = 0; i < string.length - 3; i++) {
        var first = string[i];
        var second = string[i + 1];
        var third = string[i + 2];
        var fourth = string[i + 3];
        if(first === fourth && second === third && first !== second) {
            result = true;
        }
    }
    return result;
};