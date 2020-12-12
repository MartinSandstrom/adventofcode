var fs = require("fs");

fs.readFile("./pussel.txt", "utf8", function (error, data) {
  if (error) {
    console.log(error);
  }
  const all = data.split("\n").filter(Boolean);
  solvePartTwo(all);
});

const solvePartTwo = (array) => {
  const { x, y } = array.reduce(
    ({ x, y, wayPointX, wayPointY }, instruction) => {
      var char = instruction[0];
      var number = +instruction.split(char)[1];
      if (char === "L") {
        for (let i = 0; i < number / 90; i++) {
          var temp = wayPointY;
          wayPointY = wayPointX;
          wayPointX = temp * -1;
        }
      } else if (char === "R") {
        for (let i = 0; i < number / 90; i++) {
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
      return {
        x,
        y,
        wayPointX,
        wayPointY,
      };
    },
    { x: 0, y: 0, wayPointX: 10, wayPointY: 1 }
  );
  console.log("RESULT: ", Math.abs(x) + Math.abs(y));
};

const example = ["F10", "N3", "F7", "R90", "F11"];

solvePartTwo(example);
