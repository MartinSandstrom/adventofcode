var fs = require('fs');

fs.readFile("../../test-data/day-four.txt", "utf8", function (error, data) {
	if (error) {
		console.log(error);
	}
	console.log('ANSWER: ', doMagic(data));
});

let doMagic = (data) => data.split('\n').filter(Boolean).reduce((current, line) => hasDuplicate(line.split(' ')) ? current + 1 : current, 0);

let hasDuplicate = array => array.length === new Set(array).size;
