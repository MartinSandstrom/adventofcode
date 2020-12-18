const fs = require("fs");

fs.readFile("./pussel.txt", "utf8", function (error, data) {
  if (error) {
    console.log(error);
  }
  console.time("dbsave");
  const all = data.split("\n").filter(Boolean);

  solvePartOne(all);
});

const exampleOne = ["1 + 2 * 3 + 4 * 5 + 6"];
const exampleTwo = ["1 + (2 * 3) + (4 * (5 + 6))"];
const exampleThree = ["2 * 3 + (4 * 5)"];
const exampleFour = ["5 + (8 * 3 + 9 + 3 * 4 * 3)"];
const exampleFive = ["5 * 9 * (7 * 3 * 3 + 9 * 3 + (8 + 6 * 4))"];

const calcRecursivly = (inputRow) => {
  if (!inputRow.includes("(")) {
    return inputRow
      .split(" * ")
      .map((s) => eval(s))
      .reduce((a, b) => a * b, 1);
  }
  let openCount = 0;
  let closeCount = 0;
  let openIndex = 0;
  for (let i = 0; i < inputRow.length; i++) {
    const currentChar = inputRow[i];
    if (currentChar === "(") {
      if (openCount === 0) {
        openIndex = i;
      }
      openCount++;
    } else if (currentChar === ")") {
      closeCount++;
      if (openCount === closeCount) {
        var expression = inputRow.slice(openIndex, i + 1);
        var spliced = expression.slice(1, expression.length - 1);
        var next = inputRow.replace(expression, calcRecursivly(spliced));
        return calcRecursivly(next);
      }
    }
  }
};

const solvePartOne = (array) => console.log(array.reduce((a, b) => (a += +calcRecursivly(b)), 0));

solvePartOne(exampleOne);
console.log("CORRECT: ", 231);
solvePartOne(exampleTwo);
console.log("CORRECT: ", 51);
solvePartOne(exampleThree);
console.log("CORRECT: ", 46);
solvePartOne(exampleFour);
console.log("CORRECT: ", 1445);
solvePartOne(exampleFive);
console.log("CORRECT: ", 669060);
