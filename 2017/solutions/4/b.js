var fs = require('fs');

fs.readFile("../../test-data/day-four.txt", "utf8", function (error, data) {
	if (error) {
		console.log(error);
	}
	console.log('ANSWER: ', doMagic(data));
});

let doMagic = (data) =>
	data.split('\n').filter(Boolean).reduce((current, line) => hasDuplicate(sort(line.split(' '))) ? current : current + 1, 0);

let sort = (words) => words.map((word) => word.split('').sort().join(''));

let hasDuplicate = a => a.some((s, i) => a.find((f, j) => i !== j && f === s))
