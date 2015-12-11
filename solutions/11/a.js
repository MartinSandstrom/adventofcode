
var alphabet = 'abcdefghijklmnopqrstuvwxyz';

function getNewPassword(inputString) {
	var newPassword = false;
	while (!newPassword) {
		inputString = (parseInt(inputString, 36) + 1).toString(36).replace(/0/, 'a');
		if (isValidPassword(inputString)) {
			newPassword = inputString;
		}
	}
	return newPassword;
}

function hasIncreasingThreeLetters(is) {
	var found = false;
	for (var i = 0; i < is.length; i++) {
		var l = is[i];
		var index = alphabet.indexOf(l);
		var next = alphabet[index + 1];
		var third = alphabet[index + 2];
		if (is[i + 1] === next && is[i + 2] === third) {
			found = true;
		}
	}
	return found;
}

function containBadCharacters(inputString) {
	return (inputString.indexOf('i') > -1) || (inputString.indexOf('o') > -1) || (inputString.indexOf('l') > -1);
}

function containsTwoPairs(inputString) {
	var numberOfPairs = 0;
	for (var i = 0; i < inputString.length; i++) {
		if (inputString[i] === inputString[i + 1]) {
			numberOfPairs++;
			// overlapping?
			i++;
		}
	}
	return numberOfPairs > 1;
}

function isValidPassword(inputString) {
	return hasIncreasingThreeLetters(inputString) && containsTwoPairs(inputString) && !containBadCharacters(inputString);
}

console.log('answer', getNewPassword('vzbxkghb'));
console.log((parseInt('abz', 36) + 1).toString(36));
/*
console.log('falsesee', isValidPassword('hijklmmn'));
console.log('false', isValidPassword('abbceffg'));
console.log('truue', isValidPassword('abc'));
console.log('truue', isValidPassword('werrhtrtabc'));
console.log('truuue', isValidPassword('agkopqwnbb'));
*/
