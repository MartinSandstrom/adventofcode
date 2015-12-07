var fs = require('fs');
var answerObj = {};

fs.readFile('../../test-data/day-seven.txt', 'utf8', function (error, data) {
	if (error) {
		console.log(error);
	}
	var inputStrings = data.split(/\n/);
	var start = '';
	for (var i = 0; i < inputStrings.length; i++) {
		if (inputStrings[i].indexOf('44430') > -1) {
			start = inputStrings[i];
		}
	}
	populateAnswerObj(start.toString());
	while (inputStrings) {
		var command = findNextCommand(inputStrings);
		console.log(command);
		populateAnswerObj(command);
		inputStrings.splice(inputStrings.indexOf(command), 1);
	}
	console.log(answerObj);
});

function findNextCommand(inputStrings) {
	for (var i = 0; i < inputStrings.length; i++) {
		var information = inputStrings[i].split(' ');
		information.splice(information.indexOf('NOT'), 1);
		information.splice(information.indexOf('AND'), 1);
		information.splice(information.indexOf('->'), 1);
		information.splice(information.indexOf('LSHIFT'), 1);
		information.splice(information.indexOf('RSHIFT'), 1);
		console.log(information);
		if (information.length > 2) {
			if (answerObj[information[0]] && answerObj[information[1]]) {
				return inputStrings[i];
			}
		} else if (answerObj[information[0]]) {
			return inputStrings[i];
		}
	}
}

function populateAnswerObj(inputCommand) {
	var information = inputCommand.split(' ');
	var number = information[0];
	var f = information[0];
	var s = information[2];
	if (isNaN(number) && inputCommand.indexOf('AND') > -1) {
		var andValue = answerObj[f].toString(2) & answerObj[s].toString(2);
		answerObj[information[information.length - 1]] = andValue.toString(10);
	} else if (inputCommand.indexOf('OR') > -1) {
		var orValue = answerObj[f].toString(2) | answerObj[s].toString(2);
		answerObj[information[information.length - 1]] = orValue.toString(10);
	} else if (inputCommand.indexOf('LSHIFT') > -1) {
		var lsValue = information[2];
		var ls = answerObj[f].toString(2) << parseInt(lsValue, 10);
		answerObj[information[information.length - 1]] = ls.toString(10);
	} else if (inputCommand.indexOf('RSHIFT') > -1) {
		var rsValue = information[2];
		var rs = answerObj[f].toString(2) >> parseInt(rsValue, 10);
		answerObj[information[information.length - 1]] = rs.toString(10);
	} else if (inputCommand.indexOf('NOT') > -1) {
		var n = information[1];
		var a = answerObj[n].toString(2);
		var value = ~(a);
		answerObj[information[information.length - 1]] = (65536 + parseInt(value.toString(10)));
	} else {
		answerObj[information[information.length - 1]] = number;
	}
}

// populateAnswerObj('123 -> x');
// populateAnswerObj('456 -> y');
// populateAnswerObj('x AND y -> d');
// populateAnswerObj('x OR y -> e');
// populateAnswerObj('x LSHIFT 2 -> f');
// populateAnswerObj('y RSHIFT 2 -> g');
// populateAnswerObj('NOT x -> h');
// populateAnswerObj('NOT y -> i');
// console.log(answerObj);
