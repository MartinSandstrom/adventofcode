
var fs = require('fs');

fs.readFile('../../test-data/day-14.txt', 'utf8', function (error, data) {
	var deers = [];
	var a = data.split('\n');
	a = a.filter(Boolean);
	for (var i = 0; i < a.length; i++) {
		var s = a[i].split(' ');
		var d = {speed: Number(s[3]), flyTime: Number(s[6]), restTime: Number(s[13]), distance: 0, remaining: Number(s[6]), points: 0, mode: 'f'};
		deers.push(d);
	}
	var max = getBestDeer(deers);
	console.log('answer', max);
});

function getBestDeer(r) {
	for (var d = 0; d < 2503; d++) {
		r.forEach(e => {
			if (e.mode === 'f') {
				e.distance += e.speed;
			}
			if (!--e.remaining) {
				e.mode = e.mode === 'f' ? 'r' : 'f';
				e.remaining = e.mode === 'f' ? e.flyTime : e.restTime;
			}
		});
		var max = r.reduce((r, v) => r > v.distance ? r : v.distance, 0);
		r.filter(e => e.distance === max).forEach(e => e.points++);
	}
	return r.reduce((r, v) => r > v.points ? r : v.points, 0);
}
