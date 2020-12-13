var e = 1002618;
var bussSchedule =
  "19,x,x,x,x,x,x,x,x,41,x,x,x,37,x,x,x,x,x,367,x,x,x,x,x,x,x,x,x,x,x,x,13,x,x,x,17,x,x,x,x,x,x,x,x,x,x,x,29,x,373,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,23";

var example = 939;
var exSchedule = "7,13,x,x,59,x,31,19";

const solvePartOne = (bussSchedule, earliest) => {
  const allBusses = bussSchedule.split(",").filter(Number);
  var found = false;
  var count = earliest;
  while (!found) {
    allBusses.forEach((buss) => {
      if (count % buss === 0) {
        console.log("Answer:", buss * (count - earliest));
        found = true;
      }
    });
    count++;
  }
};

solvePartOne(exSchedule, example);
solvePartOne(bussSchedule, e);
