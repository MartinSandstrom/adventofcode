var fs = require("fs");

fs.readFile("./pussel.txt", "utf8", function (error, data) {
  if (error) {
    console.log(error);
  }
  console.time("dbsave");
  const all = data.split("\nmask = ").filter(Boolean);
  solvePartTwo(all);
});

var example = ["mask = 000000000000000000000000000000X1001X\nmem[42] = 100", "mask = 00000000000000000000000000000000X0XX\nmem[26] = 1"];

const getAllMasks = (mask) => {
  if (!mask.includes("X")) return mask;
  return [getAllMasks(mask.replace("X", "0")), getAllMasks(mask.replace("X", "1"))].flat();
};

const solvePartTwo = (instructions) => {
  const mem = new Map();
  instructions.forEach((i) => {
    var [mask, ...allOther] = i.split("\n");
    mask = mask.replace("mask = ", "");
    allOther.forEach((memTry) => {
      var [memPoint, number] = memTry.replace("mem[", "").split("] = ");
      var binary = Number(memPoint).toString(2);
      var binaryArray = binary.toString().padStart(36, "0").split("");
      var maskArray = mask.split("");
      for (let i = 0; i < 36; i++) {
        var maskChar = maskArray[i];
        if (maskChar === "0") {
          continue;
        }
        if (maskChar === "1") {
          binaryArray[i] = maskChar;
        } else if (maskChar === "X") {
          binaryArray[i] = maskChar;
        }
      }
      const allMasks = getAllMasks(binaryArray.join(""));
      allMasks.forEach((m) => {
        mem.set(parseInt(m, 2), +number);
      });
    });
  });
  let sum = 0;
  for (const value of mem.values()) {
    sum = sum + value;
  }
  console.log("SUM", sum);
  console.timeEnd("dbsave");
};

//solvePartTwo(example);

// not 3054650100515
