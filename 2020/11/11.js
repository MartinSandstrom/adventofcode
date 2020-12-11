var fs = require("fs");

fs.readFile("./pussel.txt", "utf8", function (error, data) {
  if (error) {
    console.log(error);
  }
  const all = data.split("\n");
  solvePartOne(all);
});

const isAdjacent = (cordination, maxY, maxX, array, char) => {
  return !(cordination.y < 0 || cordination.y >= maxY || cordination.x < 0 || cordination.x >= maxX) && array[cordination.y][cordination.x] === char;
};

const countByCondition = (array, maxX, maxY, x, y, condition) => {
  var numberOfOccupiedAdjacent = 0;
  for (let count = 1; count < 2; count++) {
    let cordination = condition(count);
    if (isAdjacent(cordination, maxY, maxX, array, "#")) {
      numberOfOccupiedAdjacent++;
    }
  }
  return numberOfOccupiedAdjacent;
};

const getNumberOfAdjacent = (array, maxX, maxY, x, y) => {
  var leftUp = countByCondition(array, maxX, maxY, x, y, (count) => ({
    y: y - count,
    x: x - count,
  }));
  var up = countByCondition(array, maxX, maxY, x, y, (count) => ({ y: y - count, x }));
  var rightUp = countByCondition(array, maxX, maxY, x, y, (count) => ({ y: y - count, x: x + count }));
  var left = countByCondition(array, maxX, maxY, x, y, (count) => ({ y, x: x - count }));
  var right = countByCondition(array, maxX, maxY, x, y, (count) => ({ y, x: x + count }));
  var leftDown = countByCondition(array, maxX, maxY, x, y, (count) => ({ y: y + count, x: x - count }));
  var rightDown = countByCondition(array, maxX, maxY, x, y, (count) => ({ y: y + count, x: x + count }));
  var down = countByCondition(array, maxX, maxY, x, y, (count) => ({ y: y + count, x }));
  return leftUp + up + rightUp + left + right + leftDown + down + rightDown;
};

const solvePartOne = (array) => {
  var maxX = array[0].length;
  var maxY = array.length;
  var doesMove = true;

  array = array.map((row) => row.split(""));
  while (doesMove) {
    doesMove = false;
    var newArray = [...array.map((a) => [...a])];
    for (let y = 0; y < maxY; y++) {
      let row = array[y];
      for (let x = 0; x < maxX; x++) {
        let columnPosition = row[x];
        let numberOfOccupiedAdjacent = getNumberOfAdjacent(array, maxX, maxY, x, y);

        if (columnPosition === "#") {
          if (numberOfOccupiedAdjacent >= 4) {
            newArray[y][x] = "L";
            doesMove = true;
          } else {
            newArray[y][x] = "#";
          }
        } else if (columnPosition === "L") {
          if (numberOfOccupiedAdjacent < 1) {
            newArray[y][x] = "#";
            doesMove = true;
          } else {
            newArray[y][x] = "L";
          }
        } else {
          newArray[y][x] = ".";
        }
      }
    }
    array = [...newArray];
  }
  var allFiltered = array
    .flat()
    .join("")
    .split("")
    .filter((s) => {
      return s === "#";
    });
  console.log("COUNT", allFiltered.length);
};

const example = [
  "L.LL.LL.LL",
  "LLLLLLL.LL",
  "L.L.L..L..",
  "LLLL.LL.LL",
  "L.LL.LL.LL",
  "L.LLLLL.LL",
  "..L.L.....",
  "LLLLLLLLLL",
  "L.LLLLLL.L",
  "L.LLLLL.LL",
];

solvePartOne(example);
