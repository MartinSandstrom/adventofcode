var fs = require('fs');
let allTowers = {};

fs.readFile("../../test-data/day-seven.txt", "utf8", function (error, data) {
	if (error) {
		console.log(error);
	}
	let bottom = doMagic(data);
	allTowers = parseData(data);
	let answer = findImbalance(bottom[0], data);
	console.log(answer);
});

let findImbalance = (current, data) => {
	if(!current.hasChildren) {
		return;
	}
	let children = current.children;
	let allChildrenScores = [];
	children.forEach( (children) => {
		let childObject = allTowers.find( (child) => child.name === children);
		let score = getScoreFromChildren(childObject, data);
		allChildrenScores.push(score + childObject.number);
		findImbalance(children, data);
	});
	let set = new Set(allChildrenScores);
	if(set.size > 1) {
		children.forEach( (childish) => {
			let childObject = allTowers.find( (child) => child.name === childish);
		});
	}
}

let getScoreFromChildren = (current, data) => {
	if(!current.hasChildren) {
		return current.number;
	}
	let children = current.children;
	let allChildrenScores = [];
	children.forEach( (children) => {
		let childObject = allTowers.find( (child) => child.name === children);
		allChildrenScores.push(childObject.number);
	});
	return allChildrenScores.reduce( (val, current) => val + parseInt(current), 0);
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
