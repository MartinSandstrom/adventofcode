var fs = require('fs');

fs.readFile("../../test-data/day-two.txt", "utf8", function (error, data) {
	if (error) {
		console.log(error);
	}
	console.log('ANSWER: ', doMagic(data));
});

let doMagic = (data) => {
	let sum = 0;
	let array = data.split('\n').filter(Boolean);
	array.forEach((values) => {
		let numbers = values.split('\t');
		let max = 0;
		let min = 999999;
		numbers.forEach((number) => {
			max = Math.max(max, number);
			min = Math.min(min, number);
		});
		sum += max - min;
	});
	return sum;
};
