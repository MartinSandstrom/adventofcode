var containers = [11, 30, 47, 31, 32, 36, 3, 1, 5, 3, 32, 36, 15, 11, 46, 26, 28, 1, 19, 3];

containers.sort(function (a, b) {
	return b - a;
});

var count = function (index, amount) {
	var res = 0;

	for (var i = index; i < containers.length; i++) {
		if (containers[i] === amount) {
			res++;
		} else if (containers[i] < amount) {
			res += count(i + 1, amount - containers[i]);
		}
	}
	return res;
};

console.log('answer', count(0, 150));
