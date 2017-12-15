var fs = require('fs');

fs.readFile("../../test-data/day-eight.txt", "utf8", function (error, data) {
	if (error) {
		console.log(error);
	}
	console.log('ANSWER: ', doMagic(data, {}));
});

let expressions = {
	'>': (a, b) => a > b,
	'<': (a, b) => a < b,
	'<=': (a, b) => a <= b,
	'>=': (a, b) => a >= b,
	'==': (a, b) => a == b,
	'!=': (a, b) => a != b,
	'inc': (a, b) => a + b,
	'dec': (a, b) => a - b
};

let doMagic = (data, allObjects) => data.split('\n').filter(Boolean).reduce((val, line) => {
	let instructions = line.split(' ');
	let firstValue = instructions[0];
	let secondValue = instructions[4];
	let expression = instructions[5];
	allObjects[firstValue] = allObjects[firstValue] || 0;
	allObjects[secondValue] = allObjects[secondValue] || 0;
	let condition = expressions[expression](allObjects[secondValue], instructions[6]);

	if (condition) {
		allObjects[firstValue] = expressions[instructions[1]](parseInt(allObjects[firstValue]), parseInt(instructions[2]));
	}
	return Math.max(val, allObjects[firstValue])
}, 0);
