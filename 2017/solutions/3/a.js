
let puzzle = 277678;
//0 0 +1 +1 -2 -2 +3 +3 -4 -4 +5 +5 -6 -6

let cords = [];

let doMagic = (max) => {
	let x = 0;
	let y = 0;
	let numberToInc = 1;
	let isPositive = false;
	let grid = {};

	for (let i = 0; i <= max;) {
		if (isPositive) {
			for (let j = 0; j < numberToInc; j++) {
				x++;
				i++;
				if (i >= max) {
					break;
				}
			}
			if (i < max) {
				for (let j = 0; j < numberToInc; j++) {
					y++;
					i++;
					if (i >= max) {
						break;
					}
				}
			}
		} else {
			for (let j = 0; j < numberToInc; j++) {
				x--;
				i++;
				if (i >= max) {
					break;
				}
			}
			if (i < max) {
				for (let j = 0; j < numberToInc; j++) {
					y--;
					i++;
					if (i >= max) {
						break;
					}
				}
			}
		}
		isPositive = !isPositive;
		numberToInc++;
	}
	return Math.abs(x) + Math.abs(y);
};

//console.log('ANSWER: 0, GOT: ', doMagic(1));
console.log('ANSWER: 3, GOT: ', doMagic(12));
console.log('ANSWER: 2, GOT: ', doMagic(23));
console.log('ANSWER: 31, GOT: ', doMagic(1024));
console.log('ANSWER: ', doMagic(puzzle));

/*

		if(isNegative) {
			x -= numberToInc;
			console.log('X: ', x);
			console.log('Y: ', y);
			console.log('i ', i);
			if(i <= max) {
				y -= numberToInc;
				i +=  numberToInc;
				console.log('X: ', x);
				console.log('Y: ', y);
				console.log('i ', i);
			}
		} else {
			x += numberToInc;
			i +=  numberToInc;
			console.log('X: ', x);
			console.log('Y: ', y);
			console.log('i ', i);
			if(i <= max) {
				y += numberToInc;
				i +=  numberToInc;
				console.log('X: ', x);
				console.log('Y: ', y);
				console.log('i ', i);
			}
		}
*/
