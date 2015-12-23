
// Change a to 0 for part one.
var regs = {
	a: 1,
	b: 0
};
var fs = require('fs');

fs.readFile('../../test-data/day-23.txt', 'utf8', function (error, data) {
	var info = data.split('\n');
	info = info.filter(Boolean);
	var i = 0;
	while (i < info.length) {
		var sumToAdd = calculate(info[i]);
		i += parseInt(sumToAdd, 10);
	}
	console.log(regs);
});

function calculate(inputString) {
	var reg = inputString.split(' ')[1].split('')[0];
	var number = 1;
	if (inputString.indexOf('hlf') > -1) {
		regs[reg] /= 2;
		return number;
	} else if (inputString.indexOf('tpl') > -1) {
		regs[reg] *= 3;
		return number;
	} else if (inputString.indexOf('inc') > -1) {
		regs[reg] += 1;
		return number;
	} else if (inputString.indexOf('jmp') > -1) {
		number = inputString.split(' ')[1];
		if (number.indexOf('+') > -1) {
			return parseInt(number.replace('+', ''), 10);
		}
		return parseInt(number.replace('-', ''), 10) * -1;
	} else if (inputString.indexOf('jie') > -1) {
		if (regs[reg] % 2 === 0) {
			number = parseInt(inputString.split(' ')[2].replace('+', ''), 10);
		}
		return number;
	} else if (inputString.indexOf('jio') > -1) {
		if (regs[reg] === 1) {
			number = inputString.split(' ')[2].replace('+', '');
		}
		return number;
	}
}
