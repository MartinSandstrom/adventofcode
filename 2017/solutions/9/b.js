var fs = require('fs');

fs.readFile("../../test-data/day-nine.txt", "utf8", function (error, data) {
	if (error) {
		console.log(error);
	}
	let answer = doMagic(data);
	console.log('ANSWER: ' + answer);
});

let doMagic = (data) => {
	data = data.replace(/!./g, "");
	let score = 0;
	let total = 0;
	let array = data.split('');
	for(let i = 0; i < array.length; i++) {
		if (array[i] === '<') {
			let amount = getGarbageAmount(array, i);
			console.log(amount);
			total += amount;
			i += amount;
		}
	}
	return total;
}


let getGarbageAmount = (array, index) => {
	let count = 0;
	for (let i = index; i < array.length; i++) {
		if (array[i] === '>') {
			break;
		}
		count++;
	}
	return count - 1;
};
