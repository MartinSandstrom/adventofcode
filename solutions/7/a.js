var fs = require('fs');
var answerObj = {};
var inputStrings = [];

fs.readFile('../../test-data/day-seven.txt', 'utf8', function (error, data) {
	if (error) {
		console.log(error);
	}
	inputStrings = data.split(/\r\n/);
	inputString = inputStrings.filter(Boolean);
	while (!answerObj['a']) {
		var command = findNextCommand();
		if(command) {
			console.log('running command: ', command);
			populateAnswerObj(command);
		}
	}
	console.log(answerObj.a);
});



function findNextCommand() {
	for (var i = 0; i < inputStrings.length; i++) {
		var information = inputStrings[i].split(' ');
		if((information.indexOf('AND') > -1) || (information.indexOf('OR') > -1)) {
			if ((answerObj[information[0]] || !isNaN(information[0])) && (answerObj[information[2]]|| !isNaN(information[2]))) {
				var command = inputStrings.splice(i, 1);
				return command[0];
			}
		} else if(information.indexOf('LSHIFT') > -1 || information.indexOf('RSHIFT') > -1) {
			if (answerObj[information[0]] || !isNaN(information[0])) {
					var command = inputStrings.splice(i, 1);
				return command[0];
			}
		}else if(inputStrings[i].indexOf('NOT') > -1) {
			if (answerObj[information[1]] || !isNaN(information[1])) {
				var command = inputStrings.splice(i, 1);
				return command[0];
			}
		} else if(inputStrings[i].indexOf('->') > -1) {
			if (answerObj[information[0]] || !isNaN(information[0])) {
				var command = inputStrings.splice(i, 1);
				return command[0];
			}
		}
	}
}

function populateAnswerObj(inputCommand) {
	var information = inputCommand.split(' ');
	var number = information[0];
	var f = information[0];
	var s = information[2];
	if (isNaN(number) && inputCommand.indexOf('AND') > -1) {
		var first = isNaN(f) ? answerObj[f].toString(2) : f.toString(2);
		var second = isNaN(s) ? answerObj[s].toString(2) : s.toString(2);
		var andValue = first & second;
		answerObj[information[information.length - 1]] = andValue.toString(10);
	} else if (inputCommand.indexOf('OR') > -1) {
		var first = isNaN(f) ? answerObj[f].toString(2) : f.toString(2);
		var second = isNaN(s) ? answerObj[s].toString(2) : s.toString(2);
		var orValue = first | second;
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
	} else if(inputCommand.indexOf('->') > -1 && isNaN(number)) {
		answerObj[information[information.length - 1]] =  answerObj[information[0]];
	} else {
		answerObj[information[information.length - 1]] = number;
	}
}
/*
populateAnswerObj('123 -> x');
populateAnswerObj('456 -> y');
populateAnswerObj('x AND y -> d');
populateAnswerObj('x OR y -> e');
populateAnswerObj('x LSHIFT 2 -> f');
populateAnswerObj('y RSHIFT 2 -> g');
populateAnswerObj('NOT x -> h');
populateAnswerObj('NOT y -> i');
console.log(answerObj);
*/
