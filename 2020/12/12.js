var fs = require("fs");

fs.readFile("./pussel.txt", "utf8", function (error, data) {
  if (error) {
    console.log(error);
  }
  const all = data.split("\n").filter(Boolean);
  solvePartOne(all);
});

const solvePartOne = (array) => {
  var x = 0;
  var y = 0;
  var facing = "E";
  array.forEach((instruction) => {
    var char = instruction[0];
    var number = +instruction.split(char)[1];
    if (char === "L") {
      var count = number / 90;
      for (let i = 0; i < count; i++) {
        if (facing === "N") {
          facing = "W";
        } else if (facing === "S") {
          facing = "E";
        } else if (facing === "E") {
          facing = "N";
        } else if (facing === "W") {
          facing = "S";
        }
      }
    } else if (char === "R") {
      var count = number / 90;
      for (let i = 0; i < count; i++) {
        if (facing === "N") {
          facing = "E";
        } else if (facing === "S") {
          facing = "W";
        } else if (facing === "E") {
          facing = "S";
        } else if (facing === "W") {
          facing = "N";
        }
      }
    } else if (char === "N") {
      y += number;
    } else if (char === "S") {
      y -= number;
    } else if (char === "E") {
      x += number;
    } else if (char === "W") {
      x -= number;
    } else if (char === "F") {
      if (facing === "N") {
        y += number;
      } else if (facing === "S") {
        y -= number;
      } else if (facing === "E") {
        x += number;
      } else if (facing === "W") {
        x -= number;
      }
    }
  });
  console.log("RESULT: ", Math.abs(x) + Math.abs(y));
};

const example = ["F10", "N3", "F7", "R90", "F11"];

solvePartOne(example);
