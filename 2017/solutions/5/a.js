var fs = require('fs');

fs.readFile("../../test-data/day-five.txt", "utf8", function (error, data) {
	if (error) {
		console.log(error);
	}
	console.log('ANSWER: ', doMagic(data));
});

let doMagic = data => {
	let numbers = data.split('\n').filter(Boolean);
	let stillInList = true;
	let steps = 0;
	let i = 0;
	while(stillInList) {
		let currentValue = numbers[i];
		numbers[i]++;
		i += parseInt(currentValue);
		steps++;
		if (numbers[i] === undefined) {
			stillInList = false;
		}
	}
	return steps;
}
