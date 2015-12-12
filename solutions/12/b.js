
var fs = require('fs');

fs.readFile('../../test-data/day-twelve.txt', 'utf8', function (error, data) {
	console.log(sumObj(JSON.parse(data)));
});

function sumObj(data) {
	if (typeof data === 'object' && !Array.isArray(data)) {
		for (var k in data) {
			if (data[k] === 'red') {
				return 0;
			}
		}
	}
	var total = 0;
	for (var key in data) {
		if (typeof data[key] === 'object') {
			total += sumObj(data[key]);
		} else if (typeof data[key] === 'number') {
			total += data[key];
		}
	}
	return total;
}
