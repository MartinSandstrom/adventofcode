
var vowels = ['a', 'e', 'i', 'o', 'u'];
var badStrings = ['ab', 'cd', 'pq', 'xy'];

var fs = require('fs');

fs.readFile('../../test-data/day-five.txt', 'utf8', function (error, data) {
	if (error) {
		console.log(error);
	}
	var count = 0;
	var inputStrings = data.split(/\n/);
	for (var i = 0; i < inputStrings.length; i++) {
		if (isNiceString(inputStrings[i])) {
			count++;
		}
	}
	console.log('answer', count);
});

function hasVowels(inputString) {
	var vowelsCount = 0;
	for (var i = 0; i < inputString.length; i++) {
		if (vowels.indexOf(inputString[i]) > -1) {
			vowelsCount++;
		}
	}
	return vowelsCount >= 3;
}

function isNiceString(inputString) {
	return hasVowels(inputString) && hasLetterThatAppearTwiceInARow(inputString) && !hasBadString(inputString);
}

function hasLetterThatAppearTwiceInARow(inputString) {
	var isTrue = false;
	for (var i = 0; i < inputString.length; i++) {
		if (inputString[i] === inputString[i - 1] || inputString[i] === inputString[i + 1]) {
			isTrue = true;
		}
	}
	return isTrue;
}

function hasBadString(inputString) {
	var isTrue = false;
	for (var i = 0; i < badStrings.length; i++) {
		if (inputString.indexOf(badStrings[i]) > -1) {
			isTrue = true;
		}
	}
	return isTrue;
}

// onsole.log('Ja', isNiceString('ugknbfddgicrmopn'));
// console.log('Ja', isNiceString('aaa'));
// console.log('Nej', isNiceString('jchzalrnumimnmhp'));
// console.log('Nej', isNiceString('haegwjzuvuyypxyu'));
// console.log('Nej', isNiceString('dvszwmarrgswjxmb'));
