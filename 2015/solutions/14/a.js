
var fs = require('fs');

fs.readFile('../../test-data/day-14.txt', 'utf8', function (error, data) {
	var runs = data.split('\n');
	runs = runs.filter(Boolean);
	var max = 0;
	for (var i = 0; i < runs.length; i++) {
		var dist = calculateDist(runs[i]);
		if (dist > max) {
			max = dist;
		}
	}
	console.log('answer', max);
});

function calculateDist(input) {
	var time = 0;
	var dist = 0;
	var info = input.split(' ');
	var s = info[3];
	var d = info[6];
	var r = info[13];
	while (time < 2503) {
		var remaining = 2503 - time;
		if (remaining < d) {
			dist += (s * remaining);
		} else {
			dist += (s * d);
		}
		time += parseInt(d, 10);
		remaining = 2503 - time;
		if (remaining < r) {
			break;
		} else {
			time += parseInt(r, 10);
		}
	}
	return dist;
}
