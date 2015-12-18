
var fs = require('fs');
var testString = '.#.#.#...##.#....#..#...#.#..#####..';
var current = testString;
var next = '';

fs.readFile('../../test-data/day-18.txt', 'utf8', function (error, data) {
	var d = data.split('\n');
	var s = d.join('');
	current = s;
	for (var i = 0; i < 100; i++) {
		next = '';
		getNextState(current);
		current = next;
	}
	var count = (current.match(/#/g) || []).length;
	console.log(count);
});

function getNextState(state) {
	for (var i = 0; i < state.length; i++) {
		var numberOfLit = getNumberOfNeighbors(i);
		if (state[i] === '#') {
			if (numberOfLit === 2 || numberOfLit === 3) {
				next += '#';
			} else {
				next += '.';
			}
		} else if (numberOfLit === 3) {
			next += '#';
		} else {
			next += '.';
		}
	}
}

function getNumberOfNeighbors(i) {
	var numberOfLit = 0;
	var neighbors = [];
	if ((i + 1) % 100 === 0) {
		neighbors = [current[i - 101], current[i - 100], current[i - 1], current[i + 99], current[i + 100]];
	} else if ((i === '0') || (i % 100 === 0)) {
		neighbors = [current[i - 100], current[i - 99], current[i + 1], current[i + 100], current[i + 101]];
	} else {
		neighbors = [current[i - 101], current[i - 100], current[i - 99], current[i - 1], current[i + 1], current[i + 99], current[i + 100], current[i + 101]];
	}
	for (var j = 0; j < neighbors.length; j++) {
		if (neighbors[j] === '#') {
			numberOfLit++;
		}
	}
	return numberOfLit;
}
