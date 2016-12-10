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
    var bot;
    while (lines.length > 0) {
        lines.forEach((row, index, obj) => {
            var info = row.split(' ');
            if(info[0] === 'value') {
                bot = info[5];
                if(!bots[bot]) bots[bot] = { low: 0, high: 0};
                updateBot(bot,  info[1]);
                obj.splice(index, 1);
            } else if(info[0] === 'bot') {
                bot = info[1];
                if(!bots[bot]) bots[bot] = { low: 0, high: 0};
                if(bots[bot].high && bots[bot].low) {
                    if(info[5] === 'output') updateOutput(info[6], bots[bot].low);
                    else updateBot(info[6], bots[bot].low);
                    
                    if(info[10] === 'output') updateOutput(info[11], bots[bot].high);
                    else updateBot(info[11], bots[bot].high);
                    
                    bots[bot].low = bots[bot].high = 0;
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

