var fs = require('fs');

const obj = { test: 123, cool: true, awesome: 'indeed' };
console.table(obj)

fs.readFile("../../test-data/3.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    console.log('answer', doMagic(data));
});

const doMagic = (input) => {
  const lines = input.split('\n').filter(Boolean);
  const seenMap = {};
  lines.forEach(line => {
    [num, at, one, two] = line.split(' ');
    [left, top] = one.slice(0, -1).split(',').map(x => Number(x));
    [width, height] = two.split('x').map(x => Number(x));
    for (let x = left; x < left + width; x++) {
        for (let y = top; y < top + height; y++) {
          seenMap[`${x},${y}`] = (seenMap[`${x},${y}`] || 0) + 1;
        }
    }
  });
  return Object.keys(seenMap).reduce((acc, curr) => acc + (seenMap[curr] > 1 ? 1 : 0), 0);
}
