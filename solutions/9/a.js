// var testData = ['London to Dublin = 464',
// 'London to Belfast = 518',
// 'Dublin to Belfast = 141'];

var lines = [];

var permArr = [];
var usedChars = [];

var fs = require('fs');

fs.readFile('../../test-data/day-nine.txt', 'utf8', function (error, data) {
	lines = data.split('\n');
	lines = lines.filter(Boolean);
	var allDests = [];
	for (var i = 0; i < lines.length; i++) {
		var all = lines[i].split(' ');
		allDests.push(all[0]);
		allDests.push(all[2]);
	}
	allDests = allDests.filter(function (item, pos) {
		return allDests.indexOf(item) === pos;
	});
	var testRoutes = getAllRoutes(allDests);
	var minRoute = 100000000;
	for (var x = 0; x < testRoutes.length; x++) {
		var distance = calculateLength(testRoutes[x]);
		if (distance < minRoute) {
			minRoute = distance;
		}
	}
	console.log(minRoute);
});

function calculateLength(route) {
	var total = 0;
	for (var i = 0; i < route.length - 1; i++) {
		var v = getRouteValue(route[i], route[i + 1]);
		total += parseInt(v, 10);
	}
	return total;
}

function getRouteValue(from, to) {
	var value;
	for (var i = 0; i < lines.length; i++) {
		if (lines[i].indexOf(from) > -1 && lines[i].indexOf(to) > -1) {
			var splt = lines[i].split(' ');
			value = splt[4];
		}
	}
	return value;
}

function getAllRoutes(data) {
	var routes = permute(data);
	return routes;
}

function permute(input) {
	var i;
	var ch;
	for (i = 0; i < input.length; i++) {
		ch = input.splice(i, 1)[0];
		usedChars.push(ch);
		if (input.length === 0) {
			permArr.push(usedChars.slice());
		}
		permute(input);
		input.splice(i, 0, ch);
		usedChars.pop();
	}
	return permArr;
}
