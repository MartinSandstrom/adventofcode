var boss = {
	hP: 55,
	dmg: 8,
	isPoisoned: 0
};

var player = {
	hP: 50,
	mana: 500,
	isShield: 0,
	isManaReg: 0
};

var manaCost = 0;
var minManaCost = 10000;

var castSpells = {
	m: function () {
		player.mana -= 53;
		manaCost += 53;
		boss.hP -= 4;
	},
	d: function () {
		player.mana -= 73;
		manaCost += 73;
		boss.hP -= 2;
		player.hP += 2;
	},
	s: function () {
		player.mana -= 113;
		manaCost += 113;
		player.isShield = 6;
	},
	p: function () {
		player.mana -= 173;
		manaCost += 173;
		boss.isPoisoned = 6;
	},
	r: function () {
		player.mana -= 229;
		manaCost += 229;
		player.manareg = 5;
	}
};

var spells = ['p', 'r', 's', 'p', 'r', 'd', 'p', 'd', 'm'];
var roundNumber = 0;
fight();

function resetStats() {
	boss.hP = 55;
	boss.isPoisoned = 0;
	player.hP = 50;
	player.mana = 500;
	player.isShield = 0;
	player.isManaReg = 0;
}

function fight() {
	while (boss.hP > 0 && player.hP > 0) {
		player.hP -= 1;
		if (player.hP <= 0) {
			minManaCost = Math.min(manaCost, minManaCost);
			console.log('You loose!');
			break;
		}
		runEffects();
		// Player cast spell
		var spell = spells[roundNumber];
		castSpells[spell]();
		runEffects();
		// Check if boss dies.
		if (boss.hP <= 0) {
			minManaCost = Math.min(manaCost, minManaCost);
			console.log('You win!');
			console.log(minManaCost);
			break;
		}
		console.log('Boss have ' + boss.hP + ' left');

		// Caculating dmg for boss and attack.
		var bDMG = Math.max((boss.dmg - player.armor), 1);
		player.hP -= bDMG;
		console.log('Player have ' + player.hP + ' left');
		// Check if boss dies
		if (player.hP <= 0) {
			minManaCost = Math.min(manaCost, minManaCost);
			console.log('You loose!');
			break;
		}
		roundNumber++;
	}
	resetStats();
}

function runEffects() {
	if (boss.isPoisoned) {
		console.log('Boss loosing 3 HP to Poison');
		boss.hP -= 3;
	}
	if (player.isManaReg) {
		console.log('Player regen 101 mana.');
		player.mana += 101;
	}
	if (player.isShield) {
		player.armor = 7;
	} else {
		player.armor = 0;
	}
	boss.isPoisoned = Math.max((boss.isPoisoned - 1), 0);
	player.isShield = Math.max((player.isShield - 1), 0);
	player.isManaReg = Math.max((player.isManaReg - 1), 0);
}
