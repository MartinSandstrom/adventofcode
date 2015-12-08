var fs = require('fs');
var answer = 0;

fs.readFile('../../test-data/day-eight.txt', 'utf8', function (error, data) {
	if (error) {
		console.log(error);
	}
	var inputStrings = data.split(/\n/);
  inputStrings = inputStrings.filter(Boolean);
  for (var i = 0; i < inputStrings.length; i++) {
    countNumberOfChars(inputStrings[i]);
  }
  console.log('answer', answer);
});


function countNumberOfChars (s) {
  answer += JSON.stringify(s).length - s.length;
}
