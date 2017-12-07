var fs = require('fs');

fs.readFile("../../test-data/day-six.txt", "utf8", function (error, data) {
	if (error) {
		console.log(error);
	}

	let banks = data.split('\n')[0].split('\t');
	let intBanks = banks.map((bank) => parseInt(bank));
	doMagic(intBanks);
});
let combinations = new Set();

let doMagic = (banks) => {
	let bankCombination = banks.join(',');
	combinations[bankCombination] = 1;
	let hasBeenFound = false;
	while (!hasBeenFound) {
		let bankCombination = banks.join(',');
		if (combinations.has(bankCombination)) {
			hasBeenFound = true;
			console.log('We have a match: ', combinations.size);
		}
		combinations.add(bankCombination);
		let richestBankIndex = getHighestIndex(banks);
		let currentIndex = richestBankIndex;
		let bankBalance = banks[richestBankIndex];
		banks[richestBankIndex] = 0;
		while (bankBalance > 0) {
			currentIndex++;
			if (currentIndex > banks.length - 1) {
				currentIndex = 0;
			}
			banks[currentIndex]++;
			bankBalance--;
		}
	}
}

let getHighestIndex = (banks) => {
	let index = -1;
	let max = -1;
	for (let i = 0; i < banks.length; i++) {
		let current = banks[i];
		if (current > max) {
			index = i;
			max = current;
		}
	}
	return index;
}
