var bussSchedule =
  "19,x,x,x,x,x,x,x,x,41,x,x,x,37,x,x,x,x,x,367,x,x,x,x,x,x,x,x,x,x,x,x,13,x,x,x,17,x,x,x,x,x,x,x,x,x,x,x,29,x,373,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,23";

var exSchedule = "7,13,x,x,59,x,31,19";
var a = "17,x,13,19";
var b = "67,7,59,61";
var c = "67,x,7,59,61";

const parseSchedule = (schedule) => {
  return schedule
    .split(",")
    .map((bussId, offSet) => ({ bussId, offSet }))
    .filter((b) => b.bussId !== "x");
};

const solvePartTwo = (schedule) => {
  var parsed = parseSchedule(schedule);
  const { count } = parsed.reduce(
    ({ count, commonDiliminator }, { bussId, offSet }) => {
      while ((count + offSet) % bussId !== 0) count += commonDiliminator;
      commonDiliminator *= bussId;
      return {
        count,
        commonDiliminator,
      };
    },
    { count: 1, commonDiliminator: 1 }
  );
  console.log("Count: ", count);
};

solvePartTwo(a);
solvePartTwo(b);
solvePartTwo(c);
solvePartTwo(exSchedule);
solvePartTwo(bussSchedule);
