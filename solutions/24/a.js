var allPackages = [1, 3, 5, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113];
var third = 0;
var min = 1000000000000;
for (var i = 0; i < allPackages.length; i++) {
	third += allPackages[i];
}
// Change to 3 for part one.
third /= 4;
var a = combine(allPackages, 3, 7);
for (var l = 0; l < a.length; l++) {
	var numbers = a[l];
	var sum = 0;
	var QE = 1;
	for (var j = 0; j < numbers.length; j++) {
		sum += numbers[j];
		QE *= numbers[j];
	}
	if (sum === third) {
		min = Math.min(QE, min);
	}
}
console.log(min);

function combine(a, min, max) {
    var fn = function(n, src, got, all) {
        if (n == 0) {
            if (got.length > 0) {
                all[all.length] = got;
            }
            return;
        }
        for (var j = 0; j < src.length; j++) {
            fn(n - 1, src.slice(j + 1), got.concat([src[j]]), all);
        }
        return;
    }
    var all = [];
    for (var i = min; i < max; i++) {
        fn(i, a, [], all);
    }
    all.push(a);
    return all;
}
