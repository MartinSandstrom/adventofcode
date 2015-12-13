
var permArr = [];
var usedChars = [];
var fs = require('fs');
var people = ['Alice', 'Bob', 'Carol', 'David', 'Eric', 'Frank', 'Mallory', 'George'];
var people2 = ['Alice', 'Bob', 'Carol', 'David'];
var information = [];
var allSeatings = permute(people);

fs.readFile('../../test-data/day-13.txt', 'utf8', function (error, data) {
	var maxValue = 0;
	information = data.split('\n');
	for (var i = 0; i < allSeatings.length; i++) {
		var value = calculateHappieness(allSeatings[i]);
		if (value > maxValue) {
			maxValue = value;
		}
	}
	console.log('answer', maxValue);
});

fs.readFile('../../test-data/day-13-test.txt', 'utf8', function (error, data) {
	var maxValue = 0;
	information = data.split('\n');
	information = information.filter(Boolean);
	for (var i = 0; i < allSeatings.length; i++) {
		var value = calculateHappieness(allSeatings[i]);
		if (value > maxValue) {
			maxValue = value;
		}
	}
	console.log('answer2', maxValue);
});

function calculateHappieness(people) {
	var happyPoints = 0;
	for (var i = 0; i < people.length; i++) {
		var p1 = people[i];
		var p2 = people[i + 1] ? people[i + 1] : people[0];
		happyPoints += getPoints(p1, p2);
	}
	return happyPoints;
}

function getPoints(first, second) {
	var value = 0;
	for (var i = 0; i < information.length; i++) {
		if (information[i].indexOf(first) > -1 && information[i].indexOf(second) > -1) {
			var a = information[i].split(' ');
			if (a.indexOf('gain') > -1) {
				value += parseInt(a[3], 10);
			} else if (a.indexOf('lose') > -1) {
				value -= parseInt(a[3], 10);
			}
		}
	}
	return value;
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
