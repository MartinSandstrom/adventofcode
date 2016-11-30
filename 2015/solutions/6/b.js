var fs = require('fs');
var grid = {};

fs.readFile('../../test-data/day-six.txt', 'utf8', function (error, data) {
	if (error) {
		console.log(error);
	}
	var inputStrings = data.split(/\n/);
	for (var i = 0; i < inputStrings.length; i++) {
		makeChristmasLights(inputStrings[i]);
	}
	console.log('answer', sum(grid));
});

function sum(obj) {
	var sum = 0;
	for (var el in obj) {
		if (obj.hasOwnProperty(el)) {
			sum += parseFloat(obj[el]);
		}
	}
	return sum;
}

function makeChristmasLights(inputString) {
	var info = inputString.split(' ');
	if (inputString.indexOf('turn on') === 0) {
		turnOnLights(info[2], info[4]);
	}
	if (inputString.indexOf('turn off') === 0) {
		turnOffLights(info[2], info[4]);
	}
	if (inputString.indexOf('toggle') === 0) {
		toggleLights(info[1], info[3]);
	}
}

function turnOnLights(start, stop) {
	var startCords = start.split(',');
	var stopCords = stop.split(',');
	for (var x = parseInt(startCords[0], 10); x <= parseInt(stopCords[0], 10); x++) {
		for (var y = parseInt(startCords[1], 10); y <= parseInt(stopCords[1], 10); y++) {
			var cord = x + ',' + y;
			if ((cord in grid)) {
				grid[cord] += 1;
			} else {
				grid[cord] = 1;
			}
		}
	}
}

function turnOffLights(start, stop) {
	var startCords = start.split(',');
	var stopCords = stop.split(',');

	for (var x = parseInt(startCords[0], 10); x <= parseInt(stopCords[0], 10); x++) {
		for (var y = parseInt(startCords[1], 10); y <= parseInt(stopCords[1], 10); y++) {
			var cord = x + ',' + y;
			if (cord in grid) {
				if (grid[cord] === 0) {
					delete grid[cord];
				} else {
					grid[cord]--;
				}
			}
		}
	}
}

function toggleLights(start, stop) {
	var startCords = start.split(',');
	var stopCords = stop.split(',');
	for (var x = parseInt(startCords[0], 10); x <= parseInt(stopCords[0], 10); x++) {
		for (var y = parseInt(startCords[1], 10); y <= parseInt(stopCords[1], 10); y++) {
			var cord = x + ',' + y;
			if (cord in grid) {
				grid[cord] += 2;
			} else {
				grid[cord] = 2;
			}
		}
	}
}

// makeChristmasLights('turn off 0,0 through 3,0');

// makeChristmasLights('turn on 0,0 through 999,999');
// makeChristmasLights('turn off 0,0 through 999,2');
// makeChristmasLights('toggle 0,0 through 999,999');

// makeChristmasLights('turn off 0,0 through 999,999');
// makeChristmasLights('turn on 499,499 through 500,500');
// makeChristmasLights('turn on 0,0 through 999,3');
// makeChristmasLights('toggle 0,0 through 6,0');
// makeChristmasLights('toggle 0,0 through 5,0');
// console.log('svar', Object.keys(grid).length);
