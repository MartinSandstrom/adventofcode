var fs = require("fs");

fs.readFile("./pussel.txt", "utf8", function (error, data) {
  if (error) {
    console.log(error);
  }
  const all = data.split("\nmask = ").filter(Boolean);
  solvePartOne(all);
});

var example = ["XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X\nmem[8] = 11\nmem[7] = 101\nmem[8] = 0"];

const solvePartOne = (instructions) => {
  const mem = new Map();
  instructions.forEach((i) => {
    var [mask, ...allOther] = i.split("\n");
    mask = mask.replace("mask = ", "");
    allOther.forEach((memTry) => {
      var [memPoint, number] = memTry.replace("mem[", "").split("] = ");
      var binary = Number(number).toString(2);
      var binaryArray = binary.toString().padStart(36, "0").split("");
      var maskArray = mask.split("");
      for (let i = 0; i < 36; i++) {
        var maskChar = maskArray[i];
        if (maskChar === "0" || maskChar === "1") {
          binaryArray[i] = maskArray[i];
        }
      }
      mem.set(memPoint, parseInt(binaryArray.join(""), 2));
    });
  });
  let sum = 0;
  for (const value of mem.values()) {
    sum = sum + value;
  }
  console.log("SUM", sum);
};

//solvePartOne(example);

// not 3054650100515
