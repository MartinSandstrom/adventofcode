
for (var i = 1; i < 34000000; i++) {
	if (dividerTotal(i) * 11 >= 34000000) {
		console.log(i);
		break;
	}
}

function dividerTotal(nr) {
	var total = 0;
	for (var i = 1; i <= 50 && i <= nr; i++) {
		if (nr % i === 0) {
			total += nr / i;
		}
	}
	return total;
}
