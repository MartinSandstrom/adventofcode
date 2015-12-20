
var foundHouse = false;
var h = 0;
while (!foundHouse) {
	var numberOfPresents = 0;
	for (var i = 0; i <= h; i++) {
		if (h % i === 0) {
			numberOfPresents += i;
		}
	}
	if (numberOfPresents >= 3400000) {
		console.log('Hus: ', h);
		foundHouse = true;
	}
	h++;
}
