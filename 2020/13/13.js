var e = 1002618;
var bussSchedule =
  "19,x,x,x,x,x,x,x,x,41,x,x,x,37,x,x,x,x,x,367,x,x,x,x,x,x,x,x,x,x,x,x,13,x,x,x,17,x,x,x,x,x,x,x,x,x,x,x,29,x,373,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,23";

var example = 939;
var exSchedule = "7,13,x,x,59,x,31,19";

const solvePartOne = (bussSchedule, earliest) => {
  const allBusses = bussSchedule.split(",").filter(Number);
  console.log(allBusses);
  for (let i = earliest; i < earliest * 10; i++) {
    var found = false;
    allBusses.forEach((buss) => {
      if (i % buss === 0) {
        console.log("Buss:", buss);
        console.log("I:", i);
        console.log("Diff", i - earliest);
        console.log("Answer:", buss * (i - earliest));
        found = true;
      }
    });
    if (found) {
      return;
    }
  }
};

solvePartOne(exSchedule, example);
solvePartOne(bussSchedule, e);
