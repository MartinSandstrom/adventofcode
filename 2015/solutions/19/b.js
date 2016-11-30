
var fs = require('fs');
var testData = ['e => H', 'e => O', 'H => HO', 'H => OH', 'O => HH'];
var puzzle = 'CRnCaCaCaSiRnBPTiMgArSiRnSiRnMgArSiRnCaFArTiTiBSiThFYCaFArCaCaSiThCaPBSiThSiThCaCaPTiRnPBSiThRnFArArCaCaSiThCaSiThSiRnMgArCaPTiBPRnFArSiThCaSiRnFArBCaSiRnCaPRnFArPMgYCaFArCaPTiTiTiBPBSiThCaPTiBPBSiRnFArBPBSiRnCaFArBPRnSiRnFArRnSiRnBFArCaFArCaCaCaSiThSiThCaCaPBPTiTiRnFArCaPTiBSiAlArPBCaCaCaCaCaSiRnMgArCaSiThFArThCaSiThCaSiRnCaFYCaSiRnFYFArFArCaSiRnFYFArCaSiRnBPMgArSiThPRnFArCaSiRnFArTiRnSiRnFYFArCaSiRnBFArCaSiRnTiMgArSiThCaSiThCaFArPRnFArSiRnFArTiTiTiTiBCaCaSiRnCaCaFYFArSiThCaPTiBPTiBCaSiThSiRnMgArCaF';
var testString = 'HOHOHO';
var commands = [];
var min = 10000000;
var strings = {};

fs.readFile('../../test-data/day-19.txt', 'utf8', function (error, data) {
	commands = data.split('\n');
	commands = commands.filter(Boolean);
	calculate(0, 'e');
	console.log(min);
});

function calculate(calc, string) {
	if (string === puzzle) {
		console.log(calc);
		if (calc < min) {
			min = calc;
		}
		return;
	} else if (string.length > puzzle.length) {
		return;
	}
	var arr = [];
	for (var j = 0; j < commands.length; j++) {
		var molArr = generateMolecules(commands[j], string);
		arr = arr.concat(molArr);
	}
	calc++;
	for (var i = 0; i < arr.length; i++) {
		calculate(calc, arr[i]);
	}
}

function generateMolecules(command, string) {
	var info = command.split(' ');
	var results = [];
	var c = info[0];
	var l = c.length;
	var r = info[2];
	for (var i = 0; i < puzzle.length; i++) {
		var a = '';
		var b = '';
		var temp = '';
		if (l === 2) {
			var st = string[i] + string[i + 1];
			if (st === c) {
				a = string.substr(0, i);
				b = string.substr(i + 2, string.length);
				temp = a + r + b;
				if (!strings[temp]) {
					results.push(temp);
					strings[temp] = '';
				}
			}
		} else if (string[i] === c) {
			a = string.substr(0, i);
			b = string.substr(i + 1, string.length);
			temp = a + r + b;
			if (!strings[temp]) {
				results.push(temp);
				strings[temp] = 1;
			}
		}
	}
	return results;
}
