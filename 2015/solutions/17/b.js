var containers = [11, 30, 47, 31, 32, 36, 3, 1, 5, 3, 32, 36, 15, 11, 46, 26, 28, 1, 19, 3];
var num = [];

containers.sort(function (a, b) {
	return b - a;
});

containers.forEach(function (v, i) {
	num[i] = 0;
});

var count = function (index, amount, len) {
	var n = len ? len : 1;
	var res = 0;

	for (var i = index; i < containers.length; i++) {
		if (containers[i] === amount) {
			res++;
			num[n] += 1;
		} else if (containers[i] < amount) {
			res += count(i + 1, amount - containers[i], n + 1);
		}
	}
	return res;
};

count(0, 150);
console.log(num);
