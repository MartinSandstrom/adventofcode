var fs = require('fs');

fs.readFile('../../test-data/day-five.txt', 'utf8', function (error, data) {
	if (error) {
		console.log(error);
	}
	var count = 0;
	var inputStrings = data.split(/\n/);
	for (var i = 0; i < inputStrings.length; i++) {
		if (isGoodString(inputStrings[i])) {
			count++;
		}
	}
	console.log('answer', count);
});

function isGoodString(inputString) {
	return hasPairThatRepeat(inputString) && repeatsWithOneBetween(inputString);
}

function hasPairThatRepeat(inputString) {
	var numberOfPairs = 0;
	for (var i = 0; i < inputString.length; i++) {
		var duo = inputString[i] + inputString[i + 1];
		if (countInstances(inputString, duo) > 1) {
			i++;
			numberOfPairs++;
		}
	}
	return numberOfPairs > 1;
}

function countInstances(string, word) {
	var substrings = string.split(word);
	return substrings.length - 1;
}

function repeatsWithOneBetween(inputString) {
	var hasRepeaingBehaviour = false;
	for (var i = 0; i < inputString.length; i++) {
		if (inputString[i] === inputString[i + 2]) {
			hasRepeaingBehaviour = true;
		}
	}
	return hasRepeaingBehaviour;
}

// console.log('Ja', isGoodString('qjhvhtzxzqqjkmpb'));
// console.log('Ja', isGoodString('xxyxx'));
// console.log('Nej', repeatsWithOneBetween('uurcxstgmygtbstg'));
// console.log('Nej', hasPairThatRepeat('ieodomkazucvgmuy'));
