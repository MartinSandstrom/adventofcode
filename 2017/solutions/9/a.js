var fs = require('fs');

fs.readFile("../../test-data/day-nine.txt", "utf8", function (error, data) {
	if (error) {
		console.log(error);
	}
	let answer = doMagic(data);
	console.log('ANSWER: ' + answer);
});

let doMagic = (data) => {
	data = data.replace(/!./g, "").replace(/<.*?>/g, "");
	let score = 0;
	let total = 0;
	let array = data.split('');
	array.forEach( (char) => {
		if(char === '{') {
			score++;
		} else if(char === '}') {
			total += score;
			score--;
		}
	});
	return total;
}
