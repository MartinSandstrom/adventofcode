
var fs = require('fs');

fs.readFile('../../test-data/day-15.txt', 'utf8', function (error, data) {
	var info = data.split('\n');
	var ii = info[0].split(' ');
	var ji = info[1].split(' ');
	var ki = info[2].split(' ');
	var li = info[3].split(' ');
	var max = 0;
	for (var i = 0; i < 100; i++) {
		for (var j = 0; j < 100; j++) {
			for (var k = 0; k < 100; k++) {
				for (var l = 0; l < 100; l++) {
					if (i + k + j + l !== 100) {
						continue;
					}
					var capacity = (ii[2].substring(0, ii[2].length - 1) * i) +
						(ji[2].substring(0, ji[2].length - 1) * j) +
						(ki[2].substring(0, ki[2].length - 1) * k) +
						(li[2].substring(0, li[2].length - 1) * l);
					var durability = (ii[4].substring(0, ii[4].length - 1) * i) +
						(ji[4].substring(0, ji[4].length - 1) * j) +
						(ki[4].substring(0, ki[4].length - 1) * k) +
						(li[4].substring(0, li[4].length - 1) * l);
					var flavor = (ii[6].substring(0, ii[6].length - 1) * i) +
						(ji[6].substring(0, ji[6].length - 1) * j) +
						(ki[6].substring(0, ki[6].length - 1) * k) +
						(li[6].substring(0, li[6].length - 1) * l);
					var texture = (ii[8].substring(0, ii[8].length - 1) * i) +
						(ji[8].substring(0, ji[8].length - 1) * j) +
						(ki[8].substring(0, ki[8].length - 1) * k) +
						(li[8].substring(0, li[8].length - 1) * l);

					var calories = (ii[10] * i) + (ji[10] * j) + (ki[10] * k) + (li[10] * l);

					if (capacity < 0 || durability < 0 || flavor < 0 || texture < 0) {
						continue;
					}
					var value = capacity * durability * flavor * texture;

					if (value > max && calories === 500) {
						max = value;
					}
				}
			}
		}
	}

	console.log(max);
});
