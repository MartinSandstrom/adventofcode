var fs = require("fs");

fs.readFile("./pussel.txt", "utf8", function (error, data) {
  if (error) {
    console.log(error);
  }
  const all = data.split("\n").filter(Boolean);
  solvePartOne(all);
});

const replaceForwardWithDirection = (array, facing) => {
  return array.reduce((newArray, instruction) => {
    var char = instruction[0];
    var number = +instruction.split(char)[1];
    var numberOfTurns = number / 90;
    if (char === "F") {
      newArray.push(instruction.replace("F", facing));
    } else {
      if (char === "R") {
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
      }
      newArray.push(instruction);
    }
    return newArray;
  }, []);
};

const solvePartOne = (array) => {
  var fixedArray = replaceForwardWithDirection(array, "E");
  const { x, y } = fixedArray.reduce(
    ({ x, y }, instruction) => {
      var char = instruction[0];
      var number = +instruction.split(char)[1];
      return {
        x: char === "E" ? x + number : char === "W" ? x - number : x,
        y: char === "N" ? y + number : char === "S" ? y - number : y,
      };
    },
    { x: 0, y: 0 }
  );
  console.log("RESULT: ", Math.abs(x) + Math.abs(y));
};

const example = ["F10", "N3", "F7", "R90", "F11"];

solvePartOne(example);
