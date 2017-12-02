var fs = require('fs');

fs.readFile("../../test-data/day-two.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
	}
    console.log('ANSWER: ', doMagic(data));
});

let doMagic = (data) =>
	data.split('\n').filter(Boolean).reduce( (current, values) => {
		let numbers = values.split('\t');
		let big = 0;
		let small = 0;
		numbers.some( (number) =>{
			let divisibleNumber = numbers.find( (nextNumber) => nextNumber != number && number % nextNumber === 0);
			if(divisibleNumber) {
				big = number;
				small = divisibleNumber;
			}
			//Has found some
			return divisibleNumber;
		});
		return current += big / small;
	}, 0);
