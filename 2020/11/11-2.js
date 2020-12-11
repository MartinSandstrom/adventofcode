var fs = require("fs");

fs.readFile("./pussel.txt", "utf8", function (error, data) {
  if (error) {
    console.log(error);
  }
  const all = data.split("\n");
  solvePartTwo(all);
});

const isAdjacent = (cordination, maxY, maxX, array, char) => {
  return !(cordination.y < 0 || cordination.y >= maxY || cordination.x < 0 || cordination.x >= maxX) && array[cordination.y][cordination.x] === char;
};

const countByCondition = (array, maxX, maxY, x, y, condition) => {
  var numberOfOccupiedAdjacent = 0;
  for (let count = 1; count <= 100; count++) {
    let cordination = condition(count);
    if (isAdjacent(cordination, maxY, maxX, array, "#")) {
      return 1;
    }
    if (isAdjacent(cordination, maxY, maxX, array, "L")) {
      return 0;
    }
  }
  return 0;
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

const solvePartTwo = (array) => {
  var maxX = array[0].length;
  var maxY = array.length;
  var doesMove = true;

  array = array.map((row) => row.split(""));
  var count = 0;
  while (doesMove) {
    count++;
    doesMove = false;
    var newArray = [...array.map((a) => [...a])];
    for (let y = 0; y < maxY; y++) {
      let row = array[y];
      for (let x = 0; x < maxX; x++) {
        let columnPosition = row[x];
        let numberOfOccupiedAdjacent = getNumberOfAdjacent(array, maxX, maxY, x, y);
        if (columnPosition === "#") {
          if (numberOfOccupiedAdjacent >= 5) {
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

solvePartTwo(example);

/*


y = +-1 x = +-1

y = +-2 x = +-2







------------------------------

x x x x x
x x x x x
x x L x x
x x x x x
x x x x x


=> 

L x L x L
x L L L x
L L L L L
x L L L x
L x L x L

Up

{ y: y - 1, x },
{ y: y - 2, x}

Up left

{ y: y - 1, x: x - 1 },
{ y: y - 2, x: x - 2}

Up right

{ y: y - 1, x: x + 1 },
{ y: y - 2, x: x + 2}

Down

{ y: y + 1, x },
{ y: y + 2, x },

Down left
{ y: y + 1, x: x - 1 },
{ y: y + 2, x: x - 2 },

Down Right

{ y: y + 1, x: x + 1 }
{ y: y + 2, x: x + 2 }

Left

{ y, x: x - 1 },
{ y, x: x - 2 },

Right

{ y, x: x + 1 },
{ y, x: x + 2 },



*/
