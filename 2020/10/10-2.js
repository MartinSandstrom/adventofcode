var fs = require("fs");

fs.readFile("./pussel.txt", "utf8", function (error, data) {
  if (error) {
    console.log(error);
  }
  const all = data
    .split("\n")
    .filter(Boolean)
    .map((a) => +a)
    .sort((a, b) => a - b);
  console.log(solvePartTwo(all, 0));
  //solvePartTwoRec(all, 0);
  //console.log(count);
});

var count = 0;
// :the_dab:
const solvePartTwoRec = (adapters, currentJoltage) => {
  const allValidAdapters = adapters.filter((a) => [currentJoltage + 1, currentJoltage + 2, currentJoltage + 3].includes(a));
  if (allValidAdapters.length < 1) {
    count++;
  }
  allValidAdapters.forEach((a, index) => {
    var rest = [...adapters].slice(index, adapters.length);
    solvePartTwoRec(rest, a);
  });
};

const solvePartTwo = (adapters, currentJoltage) => {
  const first = currentJoltage;
  const myDevice = Math.max(...adapters) + 3;
  adapters.push(myDevice);
  adapters.push(first);
  adapters.sort((a, b) => a - b);
  const waysOfArrivingHere = [];
  waysOfArrivingHere[0] = 1;

  for (let i = 0; i < adapters.length; ++i) {
    for (let j = i + 1; j < adapters.length; ++j) {
      if (adapters[j] - adapters[i] > 3) {
        break;
      }
      if (waysOfArrivingHere[j]) {
        waysOfArrivingHere[j] += waysOfArrivingHere[i];
      } else {
        waysOfArrivingHere[j] = waysOfArrivingHere[i];
      }
    }
  }
  return waysOfArrivingHere.pop();
};

const example = [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4];
const exampleTwo = [28, 33, 18, 42, 31, 14, 46, 20, 48, 47, 24, 23, 49, 45, 19, 38, 39, 11, 1, 32, 25, 35, 8, 17, 7, 9, 4, 2, 34, 10, 3];

console.log(solvePartTwo(example, 0));
console.log(solvePartTwo(exampleTwo, 0));

/*
[1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19]

i = 0; j = 1; (1, 4)

ways[0] = 1
ways[1] = 1
ways[2] = 0
ways[3] = 0

i = 0; j = 2; (1, 5)

ways[0] = 1
ways[1] = 1
ways[2] = 0
ways[3] = 0

i = 1; j = 2; (4, 5)

ways[0] = 1
ways[1] = 1
ways[2] = 1
ways[3] = 0

i = 1; j = 3; (4, 6)

ways[0] = 1
ways[1] = 1
ways[2] = 1
ways[3] = 1

i = 1; j = 4; (4, 7)

ways[0] = 1
ways[1] = 1
ways[2] = 1
ways[3] = 1
ways[4] = 1

i = 2; j = 3; (5, 6)

ways[0] = 1
ways[1] = 1
ways[2] = 1
ways[3] = 2
ways[4] = 1

[1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19]
i = 2; j = 4; (4, 7)

ways[0] = 1
ways[1] = 1
ways[2] = 1
ways[3] = 2
ways[4] = 2

[1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19]
i = 3; j = 4; (6, 7)

ways[0] = 1
ways[1] = 1
ways[2] = 1
ways[3] = 2
ways[4] = 4

[1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19]
i = 4; j = 5; (7, 10)

ways[0] = 1
ways[1] = 1
ways[2] = 1
ways[3] = 2
ways[4] = 4
ways[5] = 4

[1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19]
i = 5; j = 6; (10, 11)

ways[0] = 1
ways[1] = 1
ways[2] = 1
ways[3] = 2
ways[4] = 4
ways[5] = 4
ways[6] = 4

[1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19]
i = 5; j = 7; (10, 12)

ways[0] = 1
ways[1] = 1
ways[2] = 1
ways[3] = 2
ways[4] = 4
ways[5] = 4
ways[6] = 4
ways[7] = 4

[1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19]
i = 6; j = 7; (11, 12)

ways[0] = 1
ways[1] = 1
ways[2] = 1
ways[3] = 2
ways[4] = 4
ways[5] = 4
ways[6] = 4
ways[7] = 8

[1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19]
i = 7; j = 8; (12, 15)

ways[0] = 1
ways[1] = 1
ways[2] = 1
ways[3] = 2
ways[4] = 4
ways[5] = 4
ways[6] = 4
ways[7] = 8
ways[8] = 8

[1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19]
i = 8; j = 9; (15, 16)

ways[0] = 1
ways[1] = 1
ways[2] = 1
ways[3] = 2
ways[4] = 4
ways[5] = 4
ways[6] = 4
ways[7] = 8
ways[8] = 8
ways[9] = 8

[1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19]
i = 9; j = 10; (16, 19)

ways[0] = 1
ways[1] = 1
ways[2] = 1
ways[3] = 2
ways[4] = 4
ways[5] = 4
ways[6] = 4
ways[7] = 8
ways[8] = 8
ways[9] = 8
ways[10] = 8

[1, 4, 5, 6, 7, 10, 11, 12, 15, 16, 19]
i = 10; j = 11; (19, 19)

ways[0] = 1
ways[1] = 1
ways[2] = 1
ways[3] = 2
ways[4] = 4
ways[5] = 4
ways[6] = 4
ways[7] = 8
ways[8] = 8
ways[9] = 8
ways[10] = 8

*/
