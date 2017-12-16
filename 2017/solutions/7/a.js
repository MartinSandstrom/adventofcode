var fs = require('fs');
let allTowers = {};
let weights = {};

fs.readFile("../../test-data/day-seven.txt", "utf8", function (error, data) {
	if (error) {
		console.log(error);
	}
	let bottom = doMagic(data);
	console.log('Bottom tower: ', bottom);
	console.log('------------');
	allTowers = parseData(data);
	let children = new Set();
	let weights = {};
	findImbalance(allTowers, bottom[0].name);
});

let findImbalance = (children, root) => {
	let exp = 0;
	let s = weights[root];
	root = children.find( (child) => child.name === root);
	root.children.forEach( (child) => {
		let w = findImbalance(children, child);
		s += w;
		if(!exp) {
			exp = w;
		} else if (exp !== w) {
			console.log(`expected ${child} to have ${exp} but found ${w}`);
			let childObj = allTowers.find( (children) => children.name === child);
			console.log(`exp: ${exp} w: ${w}`);
			console.log('POSSIBLE ANSWER: ' + parseInt(parseInt(childObj.number) + (parseInt(exp) - parseInt(w))));
			console.log('------------------');
		}
	});
	return s;
}

let doMagic = data => {
	let allTowers = parseData(data);
	let bottomTower = {};
	let children = [];
	allTowers.forEach((tower) => {
		if (tower.hasChildren) {
			children = children.concat(tower.children);
		}
	});
	return allTowers.filter((tower) => !children.includes(tower.name));
};

let parseData = (data) => {
	let parsedObj = [];
	data.split('\n').filter(Boolean).forEach((line) => {
		let information = line.split(' ');
		let name = information[0];
		let number = parseInt(information[1].substr(1).slice(0, -1));
		let hasChildren = false;
		let children = [];
		weights[name] = number;
		if (information[2]) {
			hasChildren = true;
			for (let i = 3; i < information.length; i++) {
				children.push(information[i].split(',')[0]);
			}
		}
		parsedObj.push({
			name,
			number,
			hasChildren,
			children
		});
	});
	return parsedObj;
};
