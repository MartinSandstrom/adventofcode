var fs = require('fs');
var correctInfo = {children: '3', cats: '7', samoyeds: '2', pomeranians: '3', akitas: '0', vizslas: '0', goldfish: '5', trees: '3', cars: '2', perfumes: '1'};

fs.readFile('../../test-data/day-16.txt', 'utf8', function (error, data) {
	var sues = [];
	data.split('\n').forEach(function (line) {
		var parsed = line.match(/Sue (\d+): (\w+): (\d+), (\w+): (\d+), (\w+): (\d+)/);
		if (!parsed) {
			return;
		}
		var sue = {};
		sue[parsed[2]] = parsed[3];
		sue[parsed[4]] = parsed[5];
		sue[parsed[6]] = parsed[7];
		sues[parseInt(parsed[1], 10)] = sue;
	});
	for (var i = 0; i < sues.length; i++) {
		if (hasAllElements(sues[i])) {
			console.log(sues[i], i);
		}
	}
});

function hasAllElements(input) {
	var hasAll = true;
	for (var key in input) {
		if (input[key] !== correctInfo[key]) {
			hasAll = false;
		}
	}
	return hasAll;
}
