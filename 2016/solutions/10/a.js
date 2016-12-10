var fs = require('fs');

fs.readFile("../../test-data/day-ten.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    
    doMagic(data);
    
});
var bots = {};
var outputs = {};
var highChip = 61;
var lowChip = 17;

var doMagic = (data) => {
    
    var lines = data.split(/\r|\n/);
    var hasFoundOne = true;

    while (hasFoundOne) {
        hasFoundOne = false;
        lines.forEach((row, index, obj) => {
            var info = row.split(' ');
            if(info[0] === 'value') {
                var mbot = info[5];
                var value = info[1];
                giveBotValue(mbot, value);
                obj.splice(index, 1);
                hasFoundOne = true;
            } else if(info[0] === 'bot') {
                var numberLow = info[6];
                var numberHigh = info[11];
                var bot = info[1];
                if(!bots[bot]) {
                    bots[bot] = { low: 0, high: 0};
                }
                if(bots[bot].high !== 0 && bots[bot].low !== 0) {
                    if(info[5] === 'output') {
                        giveOutputValue(numberLow, parseInt(bots[bot].low));
                        bots[bot].low = 0;
                    } else {
                        giveBotValue(numberLow, parseInt(bots[bot].low));
                        bots[bot].low = 0;
                    } 
                    if(info[10] === 'output') {
                        giveOutputValue(numberHigh, parseInt(bots[bot].high));
                        bots[bot].high = 0;
                    } else {
                        giveBotValue(numberHigh, parseInt(bots[bot].high));
                        bots[bot].high = 0;
                    } 
                    hasFoundOne = true;
                }
            }
        });
    }
};

var giveBotValue = (bot, value) => {
    if(!bots[bot]) {
        bots[bot] = { low: 0, high: 0};
    }
    updateBot(bot, value);
};

giveOutputValue = (output, value) => {
    if(!outputs[output]) {
        outputs[output] = { low: 0, high: 0};
    }
    updateOutput(output, value);
};

var updateBot = (bot, value) => {
    if(value > bots[bot].high) {
        bots[bot].low = bots[bot].high;
        bots[bot].high = value;
    } else if(value > bots[bot].low) {
        bots[bot].low = value;
    }
    if(bots[bot].low == lowChip && bots[bot].high == highChip) {
        console.log('HIT bot: ', bot);
    }
};

var updateOutput = (output, value) => {
    if(value > outputs[output].high) {
        outputs[output].low = outputs[output].high;
        outputs[output].high = value;
    } else if(value > outputs[output].low) {
        outputs[output].low = value;
    }
};

