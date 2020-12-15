var fs = require("fs");

fs.readFile("./pussel.txt", "utf8", function (error, data) {
  if (error) {
    console.log(error);
  }
  const all = data.split("\n");
  //console.log(all);
  console.log(solvePartOne(all, 0, 0));
});

const solvePartOne = (adapters, currentJoltage, count) => {
  const sorted = adapters.sort((a, b) => a - b);
  var numberOfThrees = 1;
  var numberOfOnes = 0;
  sorted.forEach((s, index) => {
    const diff = s - sorted[index - 1];
    if (diff === 3) {
      numberOfThrees++;
    } else {
      numberOfOnes++;
    }
  });
  console.log(numberOfOnes);
  console.log(numberOfThrees);
  return numberOfOnes * numberOfThrees;
};

const example = [16, 10, 15, 5, 1, 11, 7, 19, 6, 12, 4];

const exampleTwo = [28, 33, 18, 42, 31, 14, 46, 20, 48, 47, 24, 23, 49, 45, 19, 38, 39, 11, 1, 32, 25, 35, 8, 17, 7, 9, 4, 2, 34, 10, 3];

//solvePartOne(example, 0, 0);
solvePartOne(exampleTwo, 0, 0);
