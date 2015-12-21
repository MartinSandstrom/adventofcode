
var boss = {
	hP: 109,
	damage: 8,
	armor: 2
};

var player = {
	hP: 100,
	damage: 0,
	armor: 0
};

var minCost = 100000;
var currentItemCost = 0;

var w = ['Dagger 8 4 0', 'Shortsword 10 5 0', 'Warhammer 25 6 0', 'Longsword 40 7 0', 'Greataxe 74 8 0'];
var a = ['None 0 0 0', 'Leather 13 0 1', 'Chainmail 31 0 2', 'Splintmail 53 0 3', 'Bandedmail 75 0 4', 'Platemail 102 0 5'];
var r = ['None 0 0 0', 'None 0 0 0', 'Damage1 25 1 0', 'Damage2 50 2 0', 'Damage3 100 3 0', 'Defense 20 0 1', 'Defense 40 0 2', 'Defense 80 0 3'];

takeOnTheBoss();
console.log('Min cost: ', minCost);

function takeOnTheBoss() {
	for (var i = 0; i < w.length; i++) {
		currentItemCost = 0;
		var ii = w[i].split(' ');
		currentItemCost += parseInt(ii[1], 10);
		player.damage = parseInt(ii[2], 10);
		for (var j = 0; j < a.length; j++) {
			var ji = a[j].split(' ');
			currentItemCost += parseInt(ji[1], 10);
			player.armor = parseInt(ji[3], 10);
			for (var k = 0; k < r.length; k++) {
				var ki = r[k].split(' ');
				currentItemCost += parseInt(ki[1], 10);
				player.damage += parseInt(ki[2], 10);
				player.armor += parseInt(ki[3], 10);
				for (var l = k; l < r.length; l++) {
					var li = r[l].split(' ');
					currentItemCost += parseInt(li[1], 10);
					player.damage += parseInt(li[2], 10);
					player.armor += parseInt(li[3], 10);
					fight();
					resetStats();
					currentItemCost -= parseInt(li[1], 10);
					player.damage -= parseInt(li[2], 10);
					player.armor -= parseInt(li[3], 10);
				}
				currentItemCost -= parseInt(ki[1], 10);
				player.damage -= parseInt(ki[2], 10);
				player.armor -= parseInt(ki[3], 10);
			}
			currentItemCost -= parseInt(ji[1], 10);
		}
	}
}

function resetStats() {
	boss.hP = 109;
	player.hP = 100;
}

function fight() {
	var someoneIsDead = false;
	while (!someoneIsDead) {
		if ((player.damage - boss.armor) <= 0) {
			boss.hP -= 1;
		} else {
			boss.hP += (boss.armor - player.damage);
		}
		if (boss.hP <= 0) {
			console.log('You win! ItemsCost: ', currentItemCost);
			if (currentItemCost < minCost) {
				minCost = currentItemCost;
			}
			someoneIsDead = true;
			break;
		}
		if ((boss.damange - player.armor) <= 0) {
			player.hP -= 1;
		} else {
			player.hP += (player.armor - boss.damage);
		}
		if (player.hP <= 0) {
			console.log('You Lose! Go buy better gear. ItemsCost: ', currentItemCost);
			someoneIsDead = true;
			break;
		}
		// console.log('Boss', boss.hP);
		// <console.log('Player', player.hP);
	}
}
