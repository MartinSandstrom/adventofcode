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
	'inc': (a, b) => a += b,
	'dec': (a, b) => a += b
};

let doMagic = (data, allObjects) => {
	return data.split('\n').filter(Boolean).reduce((val, line) => {
		let instructions = line.split(' ');
		allObjects[instructions[0]] ? true : allObjects[instructions[0]] = 0;
		allObjects[instructions[4]] ? true : allObjects[instructions[4]] = 0;
		if (expressions[instructions[5]](allObjects[instructions[4]], instructions[6])) {
			instructions[1] === 'inc' ? allObjects[instructions[0]] += parseInt(instructions[2]) :
				allObjects[instructions[0]] -= parseInt(instructions[2]);
		}
		return Math.max(val, allObjects[instructions[0]]);
	}, 0);
};
