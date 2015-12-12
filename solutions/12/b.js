
var fs = require('fs');

fs.readFile('../../test-data/day-twelve.txt', 'utf8', function (error, data) {
	console.log(sumObj(JSON.parse(data)));
});

function sumObj(data) {
	if (typeof data === 'object' && !Array.isArray(data)) {
		console.log('hej');
		for (var k in data) {
			if (data[k] === 'red') {
				return 0;
			}
		}
	}
	var total = 0;
	for (var key in data) {
		if (typeof data[key] === 'object') {
			total += sumObj(data[key]);
		} else if (typeof data[key] === 'number') {
			total += data[key];
		}
	}
	return total;
}

/*
	console.log(objArr);
	if (objArr instanceof Object) {
		for (var el in objArr) {
			if (objArr.hasOwnProperty(el)) {
				var isRed = false;
				for (var le in objArr) {
					if (objArr.hasOwnProperty(el)) {
						if (le.indexOf('red') > -1) {
							isRed = true;
						}
					}
				}
				if (!isRed) {
					total += parseInt(objArr[el], 10);
				}
			}
		}
	} else {
		for (var i = 0; i < objArr.length; i++) {
			total += parseInt(objArr[i], 10);
		}
	}

	*/
