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
      var n = map.has(0) ? [map.get(0).pop(), turn] : [turn];
      map.set(0, n);
    } else {
      const val = map.get(lastSpoken);
      const diff = val[1] - val[0];
      lastSpoken = diff;
      var n = map.has(diff) ? [map.get(diff).pop(), turn] : [turn];
      map.set(diff, n);
    }
  }
  console.log(lastSpoken);
};

solvePartOneAndTwo(example.split(",").map(Number));
solvePartOneAndTwo(pussel.split(",").map(Number));
