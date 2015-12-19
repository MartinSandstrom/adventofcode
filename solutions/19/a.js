
var fs = require('fs');
var testdata = ['H => HO', 'H => OH', 'O => HH'];
var puzzle = 'CRnCaCaCaSiRnBPTiMgArSiRnSiRnMgArSiRnCaFArTiTiBSiThFYCaFArCaCaSiThCaPBSiThSiThCaCaPTiRnPBSiThRnFArArCaCaSiThCaSiThSiRnMgArCaPTiBPRnFArSiThCaSiRnFArBCaSiRnCaPRnFArPMgYCaFArCaPTiTiTiBPBSiThCaPTiBPBSiRnFArBPBSiRnCaFArBPRnSiRnFArRnSiRnBFArCaFArCaCaCaSiThSiThCaCaPBPTiTiRnFArCaPTiBSiAlArPBCaCaCaCaCaSiRnMgArCaSiThFArThCaSiThCaSiRnCaFYCaSiRnFYFArFArCaSiRnFYFArCaSiRnBPMgArSiThPRnFArCaSiRnFArTiRnSiRnFYFArCaSiRnBFArCaSiRnTiMgArSiThCaSiThCaFArPRnFArSiRnFArTiTiTiTiBCaCaSiRnCaCaFYFArSiThCaPTiBPTiBCaSiThSiRnMgArCaF';
var testString = 'HOH';
var results = [];

fs.readFile('../../test-data/day-19.txt', 'utf8', function (error, data) {
	var commands = data.split('\n');
	commands = commands.filter(Boolean);
	for (var i = 0; i < commands.length; i++) {
		generateMolecules(commands[i]);
	}
	var unique = results.filter(function (item, i, ar) {
		return ar.indexOf(item) === i;
	});
	console.log(unique.length);
});

function generateMolecules(command) {
	var info = command.split(' ');
	var c = info[0];
	var l = c.length;
	var r = info[2];
	for (var i = 0; i < puzzle.length; i++) {
		var a = '';
		var b = '';
		var temp = '';
		if (l === 2) {
			var st = puzzle[i] + puzzle[i + 1];
			if (st === c) {
				a = puzzle.substr(0, i);
				b = puzzle.substr(i + 2, puzzle.length);
				temp = a + r + b;
				results.push(temp);
			}
		} else if (puzzle[i] === c) {
			a = puzzle.substr(0, i);
			b = puzzle.substr(i + 1, puzzle.length);
			temp = a + r + b;
			results.push(temp);
		}
	}
}
