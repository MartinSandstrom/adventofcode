var fs = require("fs");

fs.readFile("./pussel.txt", "utf8", function (error, data) {
  if (error) {
    console.log(error);
  }
  const all = data.split("\n");
  solvePartOne(all, 25);
  solvePartTwo(all, 167829540);
});

const hasPairEqualTo = (array, sum, seen) =>
  array.filter((n) => {
    const hasBrother = seen.has(+sum - +n);
    if (!hasBrother) {
      seen.add(+n);
    }
    return hasBrother;
  }).length > 0;

const solvePartOne = (array, preamble) => {
  for (let i = preamble; i < array.length; i++) {
    const previousFromPremble = [...array].slice(i - preamble, i);
    if (!hasPairEqualTo(previousFromPremble, array[i], new Set())) {
      console.log("Found ya", array[i]);
    }
  }
};

const findInPrev = (array, number) => {
  var count = 0;
  for (let i = array.length - 1; i > 0; i--) {
    count += +array[i];
    if (count > number) {
      return false;
    }
    if (count === number) {
      var array = [...array].slice(i);
      var sorted = array.map((a) => +a).sort((a, b) => a - b);
      console.log("Number: ", sorted.pop() + sorted.shift());
      return true;
    }
  }
  return false;
};

const solvePartTwo = (array, number) => {
  for (let i = 0; i < array.length; i++) {
    const prev = [...array].slice(0, i + 1);
    if (findInPrev(prev, number)) {
      return;
    }
  }
};

const example = [35, 20, 15, 25, 47, 40, 62, 55, 65, 95, 102, 117, 150, 182, 127, 219, 299, 277, 309, 576];
solvePartOne(example, 5);
solvePartTwo(example, 127);
