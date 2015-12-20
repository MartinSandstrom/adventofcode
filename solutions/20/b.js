
var foundHouse = false;
var h = 0;
while (!foundHouse) {
	var numberOfPresents = 0;
	for (var i = h - 50; i <= h; i++) {
		if (h % i === 0) {
			numberOfPresents += i * 11;
		}
	}
	if (numberOfPresents >= 34000000) {
		console.log('Hus: ', h);
		foundHouse = true;
	}
	h++;
}
