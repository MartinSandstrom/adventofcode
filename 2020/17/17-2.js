var pussel = ["#......#", "##.#..#.", "#.#.###.", ".##.....", ".##.#...", "##.#....", "#####.#.", "##.#.###"];

var example = [".#.", "..#", "###"];

const getNeighbors = (x, y, z, h, map) => {
  let count = 0;
  for (let hh = h - 1; hh <= h + 1; hh++) {
    for (let zz = z - 1; zz <= z + 1; zz++) {
      for (let yy = y - 1; yy <= y + 1; yy++) {
        for (let xx = x - 1; xx <= x + 1; xx++) {
          if ((xx !== x || yy !== y || zz !== z || hh !== h) && map[`${xx},${yy},${zz},${hh}`]) {
            count++;
          }
        }
      }
    }
  }
  return count;
};

var solvePartTwo = (array) => {
  let currentGen = {};
  for (let y = 0; y < array.length; y++) {
    for (let x = 0; x < array[0].length; x++) {
      if (array[y][x] === "#") {
        currentGen[`${x},${y},0,0`] = true;
      }
    }
  }
  let height = [0, array.length];
  let width = [0, array[0].length];
  let depth = [0, 1];
  let hyp = [0, 1];

  for (let t = 0; t < 6; t++) {
    console.log(t);
    let nextGen = {};
    height[0]--;
    height[1]++;
    width[0]--;
    width[1]++;
    depth[0]--;
    depth[1]++;
    hyp[0]--;
    hyp[1]++;
    for (let h = hyp[0]; h < hyp[1]; h++) {
      for (let z = depth[0]; z < depth[1]; z++) {
        for (let y = width[0]; y < width[1]; y++) {
          for (let x = height[0]; x < height[1]; x++) {
            let neigh = getNeighbors(x, y, z, h, currentGen);
            const isActive = currentGen[`${x},${y},${z},${h}`];
            if (neigh === 3 || (neigh === 2 && isActive)) {
              nextGen[`${x},${y},${z},${h}`] = true;
            }
          }
        }
      }
    }
    currentGen = nextGen;
  }
  console.log(Object.keys(currentGen).length);
};

//solvePartTwo(example);
console.time("solvePartTwo");
solvePartTwo(pussel);
console.timeEnd("solvePartTwo");
