
var fs = require('fs');

fs.readFile('../../test-data/day-twelve.txt', 'utf8', function (error, data) {
	var stringEq = data.replace(/[^-\d]+/g, '+');
	var answer = eval(stringEq + 0);
	console.log('answer', answer);
});
