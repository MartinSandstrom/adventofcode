var fs = require('fs');

fs.readFile("../../test-data/day-eight.txt", "utf8", function (error, data) {
	if (error) {
		console.log(error);
	}
	let answer = doMagic(data);
});

let allObjects = {};
let highestEver = -9999;

let expressions = {
	'>': (a, b) => a > b,
	'<': (a, b) => a < b,
	'<=': (a, b) => a <= b,
	'>=': (a, b) => a >= b,
	'==': (a, b) => a == b,
	'!=': (a, b) => a != b
};

let doMagic = (data) => {
	let array = data.split('\n').filter(Boolean);
	array.forEach((line) => {
		let instructions = line.split(' ');
		let firstValue = instructions[0];
		let isInc = instructions[1] === 'inc';
		let moreOrLess = instructions[5];
		let secondValue = instructions[4];
		if (!allObjects[firstValue]) {
			allObjects[firstValue] = 0;
		}
		if (!allObjects[secondValue]) {
			allObjects[secondValue] = 0;
		}
		let functionToUse = expressions[moreOrLess];
		let condition = functionToUse(allObjects[secondValue], instructions[6]);
		if (condition) {
			if (isInc) {
				allObjects[firstValue] += parseInt(instructions[2]);
			} else {
				allObjects[firstValue] -= parseInt(instructions[2]);
			}
		}
		let arr = Object.keys(allObjects).map(function (key) { return allObjects[key]; });
		let max = Math.max.apply( highestEver, arr );
		highestEver = Math.max(highestEver, max);
	});
	console.log(highestEver);
};
