var fs = require('fs');

fs.readFile("../../test-data/day-ten.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    doMagic(data);
});
var bots = {};
var outputs = {};

var doMagic = (data) => {
    
    var lines = data.split(/\r|\n/);
    var hasFoundOne = true;
    var bot;

    while (hasFoundOne) {
        hasFoundOne = false;
        lines.forEach((row, index, obj) => {
            var info = row.split(' ');
            if(info[0] === 'value') {
                bot = info[5];
                var value = info[1];
                if(!bots[bot]) bots[bot] = { low: 0, high: 0};
                updateBot(bot, value);
                obj.splice(index, 1);
                hasFoundOne = true;
            } else if(info[0] === 'bot') {
                var numberLow = info[6];
                var numberHigh = info[11];
                bot = info[1];
                if(!bots[bot]) bots[bot] = { low: 0, high: 0};
                
                if(bots[bot].high !== 0 && bots[bot].low !== 0) {
                    if(info[5] === 'output') updateOutput(numberLow, bots[bot].low);
                    else updateBot(numberLow, bots[bot].low);
                    
                    if(info[10] === 'output') updateOutput(numberHigh, bots[bot].high);
                    else updateBot(numberHigh, bots[bot].high);
                    
                    bots[bot].low = 0;
                    bots[bot].high = 0;
                    hasFoundOne = true;
                    obj.splice(index, 1);
                }
            }
        });
    }
    console.log(outputs[0] * outputs[1] * outputs[2]);
};

var updateBot = (bot, value) => {
    value = parseInt(value);
    if(value > bots[bot].high) {
        bots[bot].low = bots[bot].high;
        bots[bot].high = value;
    } else if(value > bots[bot].low) {
        bots[bot].low = value;
    }
};

var updateOutput = (output, value) => !outputs[output] || value > outputs[output] ? outputs[output] = parseInt(value) : true;

