var answer = getAnswer('1113222113');
console.log('answer', answer.length);

function getAnswer(inputString) {
	for (var i = 0; i < 50; i++) {
		inputString = lookAndSay(inputString);
	}
	return inputString;
}

function lookAndSay(inputString) {
	var newString = '';
	for (var i = 0; i < inputString.length; i++) {
		var number = inputString[i];
		var numberInRow = 1;
		for (var j = i + 1; j < inputString.length; j++) {
			if (number === inputString[j]) {
				numberInRow++;
			} else {
				break;
			}
		}
		i += parseInt(numberInRow - 1, 10);
		newString += numberInRow + number;
	}
	return newString;
}
