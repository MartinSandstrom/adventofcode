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
  var wayPointX = 10;
  var wayPointY = 1;
  array.forEach((instruction) => {
    var char = instruction[0];
    var number = +instruction.split(char)[1];
    if (char === "L") {
      var count = number / 90;
      for (let i = 0; i < count; i++) {
        var temp = wayPointY;
        wayPointY = wayPointX;
        wayPointX = temp * -1;
      }
    } else if (char === "R") {
      var count = number / 90;
      for (let i = 0; i < count; i++) {
        var temp = wayPointX;
        wayPointX = wayPointY;
        wayPointY = temp * -1;
      }
    } else if (char === "N") wayPointY += number;
    else if (char === "S") wayPointY -= number;
    else if (char === "E") wayPointX += number;
    else if (char === "W") wayPointX -= number;
    else if (char === "F") {
      x += number * wayPointX;
      y += number * wayPointY;
    }
  });
  console.log("RESULT: ", Math.abs(x) + Math.abs(y));
};

const example = ["F10", "N3", "F7", "R90", "F11"];

solvePartOne(example);
