var fs = require("fs");

fs.readFile("./pussel.txt", "utf8", function (error, data) {
  if (error) {
    console.log(error);
  }
  const all = data.split("\n").filter(Boolean);
  solvePartOne(all);
});

const replaceForwardWithDirection = (array, facing) =>
  array.reduce((fixedArray, instruction) => {
    var char = instruction[0];
    var number = +instruction.split(char)[1];
    var numberOfTurns = number / 90;
    if (char === "F") {
      fixedArray.push({ facing, number });
    } else if (char === "R") {
      while (numberOfTurns--) {
        if (facing === "N") facing = "E";
        else if (facing === "E") facing = "S";
        else if (facing === "S") facing = "W";
        else if (facing === "W") facing = "N";
      }
    } else if (char === "L") {
      while (numberOfTurns--) {
        if (facing === "N") facing = "W";
        else if (facing === "W") facing = "S";
        else if (facing === "S") facing = "E";
        else if (facing === "E") facing = "N";
      }
    } else {
      fixedArray.push({ facing: char, number });
    }
    return fixedArray;
  }, []);

const solvePartOne = (array) => {
  var fixedArray = replaceForwardWithDirection(array, "E");
  const { x, y } = fixedArray.reduce(
    ({ x, y }, { facing, number }) => ({
      x: facing === "E" ? x + number : facing === "W" ? x - number : x,
      y: facing === "N" ? y + number : facing === "S" ? y - number : y,
    }),
    { x: 0, y: 0 }
  );
  console.log("RESULT: ", Math.abs(x) + Math.abs(y));
};

const example = ["F10", "N3", "F7", "R90", "F11"];

solvePartOne(example);
