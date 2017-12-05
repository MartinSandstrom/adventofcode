let puzzle = 277678;
//0 0 +1 +1 -2 -2 +3 +3 -4 -4 +5 +5 -6 -6

let grid = { '0,0': 1 };

let doMagic = (max) => {
	let x = 0;
	let y = 0;
	let numberToInc = 1;
	let isPositive = true;
	let sum = 1;
	while (true) {
		var val = getNeighbourSum(x, y);
		if (val >= max) {
			console.log('Answer:', val);
			break;
		}
		grid[x + ',' + y] = val;

		if ((x !== y || x >= 0) && Math.abs(x) <= Math.abs(y)) {
			x += y >= 0 ? 1 : -1;
		} else {
			y += x >= 0 ? -1 : 1;
		}
	}
};

let getNeighbourSum = (posX, posY) => {
	var sum = 0;
	for (var x = posX - 1; x <= posX + 1; x++) {
		for (var y = posY - 1; y <= posY + 1; y++) {
			if (grid[x + ',' + y]) {
				sum += grid[x + ',' + y];
			}
		}
	}
	return sum;
}

doMagic(puzzle);
