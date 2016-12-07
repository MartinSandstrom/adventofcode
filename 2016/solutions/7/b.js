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
        var abas = [];
        var hypers = []
        for (var i = 0; i < numberOfHyper + 1; i++) {
            var stop = array.indexOf('[');
            if(stop === -1) stop = array.length;
            var first = array.splice(0, stop).join('');
            var hyper = array.splice(0, array.indexOf(']') + 1).join('').replace('[', '').replace(']', '');
            hypers.push(hyper);
            isAba(first, abas);
        }
        var isIp = false;
        abas.forEach((aba) => {
            var reversed = aba[1] + aba[0] + aba[1];
            hypers.forEach((hyper) => {
                if(hyper.indexOf(reversed) > -1) {
                    isIp = true;
                }
            });
        });
        if(isIp) total += 1;

    });
    console.log('Total', total);
};

var isAba = (string, abas) => {
    for (var i = 0; i < string.length - 2; i++) {
        var first = string[i];
        var second = string[i + 1];
        var third = string[i + 2];
        if(first === third && first !== second) {
            abas.push(first + second + third);
        }
    }
};