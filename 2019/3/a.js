var fs = require('fs');

fs.readFile("./data.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    console.log('answer', doMagic(data));
});

const doMagic = input  => {
  const array = input.split('\n').filter(Boolean);

  const firstWire = array[0];
  const secondWire = array[1];

  return getShostestPath(firstWire, secondWire);
}

const getShostestPath = (firstWire, secondWire) => {
  const visitedMap = {};

  placeWire(firstWire, visitedMap, true);
  placeWire(secondWire, visitedMap, false);

  const minIntersectionPoint = Object.values(visitedMap).reduce((acc, curr) => Math.min(acc, curr), Infinity);

  return minIntersectionPoint;
}

const placeWire = (array, visitedMap, isFirstWire) => {
  let x = 0;
  let y = 0;
  const instructions = array.split(',');
  instructions.forEach(instruction => {
    const direction = instruction.slice(0, 1);
    let numberOfSteps = instruction.slice(1, instruction.length);
    while (numberOfSteps > 0) {
      if (direction === 'U') y++;
      if (direction === 'D') y--;
      if (direction === 'L') x--;
      if (direction === 'R') x++;

      const key = `${x},${y}`;
      if(isFirstWire) {
        visitedMap[key] = Infinity;
      } else if (visitedMap[key]) {
        visitedMap[key] = Math.abs(x) + Math.abs(y);
      }
      numberOfSteps--;
    }
  });
}

console.log('TEST ONE = 159 => ', getShostestPath('R75,D30,R83,U83,L12,D49,R71,U7,L72', 'U62,R66,U55,R34,D71,R55,D58,R83'));
console.log('TEST TWO = 135 => ', getShostestPath('R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51', 'U98,R91,D20,R16,D67,R40,U7,R15,U6,R7'));
