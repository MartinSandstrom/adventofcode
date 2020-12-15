const example = "0,3,6";
const pussel = "11,18,0,20,1,7,16";

const solvePartOneAndTwo = (array) => {
  const map = new Map();
  array.forEach((num, index) => map.set(num, [index + 1]));
  let turn = array.length;
  let lastSpoken = array.pop();

  while (turn < 2020) {
    turn++;
    if (map.get(lastSpoken).length === 1) {
      lastSpoken = 0;
      setNext(0, map, turn);
    } else {
      const val = map.get(lastSpoken);
      const diff = val[1] - val[0];
      lastSpoken = diff;
      setNext(diff, map, turn);
    }
  }
  console.log(lastSpoken);
};

const setNext = (number, map, turn) => {
  var toSet = map.has(number) ? [map.get(number).pop(), turn] : [turn];
  map.set(number, toSet);
};

console.time("solvePartOneAndTwo");
solvePartOneAndTwo(pussel.split(",").map(Number));
console.timeEnd("solvePartOneAndTwo");
