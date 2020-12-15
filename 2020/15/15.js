const example = "0,3,6";
const pussel = "11,18,0,20,1,7,16";

const solvePartOneAndTwo = (array) => {
  const map = new Map();
  array.forEach((num, index) => map.set(num, [index + 1]));
  let turn = array.length;
  let lastSpoken = array.pop();

  while (turn < 2020) {
    turn++;
    if (map.get(lastSpoken).length === 1) {
      lastSpoken = 0;
      if (map.has(0)) {
        const val = map.get(0);
        map.set(0, [val.pop(), turn]);
      } else {
        map.set(0, [turn]);
      }
    } else {
      const val = map.get(lastSpoken);
      const diff = val[1] - val[0];
      lastSpoken = diff;
      if (map.has(diff)) {
        const val = map.get(diff);
        map.set(diff, val.slice(-1).concat(turn));
      } else {
        map.set(diff, [turn]);
      }
    }
  }
  console.log(lastSpoken);
};

solvePartOne(example.split(",").map(Number));
solvePartOne(pussel.split(",").map(Number));

/*






    var hasBeenSeenBefore = parsed.find((a) => a[0] === lastSpoken);
    if (hasBeenSeenBefore && hasBeenSeenBefore[1].length > 0) {
      console.log("lastNumberSpoken is before", lastSpoken);
      console.log("hasBeenSeenBefore", hasBeenSeenBefore);
      const lastSeen = hasBeenSeenBefore[1][hasBeenSeenBefore[1].length - 1];
      const lastSeenBeforeThat = hasBeenSeenBefore[1][hasBeenSeenBefore[1].length - 2];
      console.log("lastSeen", lastSeen);
      console.log("lastSeenBeforeThat", lastSeenBeforeThat);
      var diff = lastSeen - lastSeenBeforeThat;

      if (parsed.find((a) => a[0] === lastSpoken)) {
        parsed = parsed.map((p) => {
          if (p[0] === lastSpoken) {
            p[1] = [...p[1], count];
          }
          return p;
        });
        lastSpoken = diff;
      } else {
        parsed.push([lastSpoken, []]);
        lastSpoken = diff;
      }
    } else {
      if (parsed.find((a) => a[0] === "0")) {
        parsed = parsed.map((p) => {
          console.log("p", p);
          if (p[0] === "0") {
            p[1] = [...p[1], count];
          }
          return p;
        });
        lastSpoken = "0";
      } else {
        parsed.push(["0", []]);
        lastSpoken = "0";
      }
    }










*/
