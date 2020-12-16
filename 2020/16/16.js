var defs = [
  function (number) {
    return (number >= 45 && number < 535) || (number >= 550 && number <= 961);
  },
  function (number) {
    return (number >= 45 && number < 278) || (number >= 294 && number <= 974);
  },
  function (number) {
    return (number >= 46 && number < 121) || (number >= 138 && number <= 965);
  },
  function (number) {
    return (number >= 38 && number < 149) || (number >= 173 && number <= 949);
  },
  function (number) {
    return (number >= 34 && number < 223) || (number >= 248 && number <= 957);
  },
  function (number) {
    return (number >= 32 && number < 64) || (number >= 79 && number <= 952);
  },
  function (number) {
    return (number >= 49 && number < 879) || (number >= 905 && number <= 968);
  },
  function (number) {
    return (number >= 47 && number < 306) || (number >= 323 && number <= 973);
  },
  function (number) {
    return (number >= 46 && number < 823) || (number >= 834 && number <= 971);
  },
  function (number) {
    return (number >= 30 && number < 464) || (number >= 486 && number <= 963);
  },
  function (number) {
    return (number > 40 && number < 350) || (number >= 372 && number <= 965);
  },
  function (number) {
    return (number > 47 && number < 414) || (number >= 423 && number <= 950);
  },
  function (number) {
    return (number > 45 && number < 507) || (number >= 526 && number <= 956);
  },
  function (number) {
    return (number > 42 && number < 779) || (number >= 799 && number <= 970);
  },
  function (number) {
    return (number > 26 && number < 865) || (number >= 872 && number <= 955);
  },
  function (number) {
    return (number > 43 && number < 724) || (number >= 739 && number <= 970);
  },
  function (number) {
    return (number > 25 && number < 914) || (number >= 926 && number <= 958);
  },
  function (number) {
    return (number > 33 && number < 205) || (number >= 218 && number <= 965);
  },
  function (number) {
    return (number > 43 && number < 101) || (number >= 118 && number <= 951);
  },
  function (number) {
    return (number > 45 && number < 844) || (number >= 858 && number <= 970);
  },
];

var myTickets = "173,191,61,199,101,179,257,79,193,223,139,97,83,197,251,53,89,149,181,59";

var exampleDefs = [
  function (number) {
    return (number >= 1 && number <= 3) || (number >= 5 && number <= 7);
  },
  function (number) {
    return (number >= 6 && number <= 11) || (number >= 33 && number <= 44);
  },
  function (number) {
    return (number >= 13 && number <= 40) || (number >= 45 && number <= 50);
  },
];

var example = ["7,3,47", "40,4,50", "55,2,20", "38,6,12"];

var fs = require("fs");

fs.readFile("./pussel.txt", "utf8", function (error, data) {
  if (error) {
    console.log(error);
  }
  console.time("dbsave");
  const all = data.split("\n").filter(Boolean);
  console.log(all);
  solvePartOne(all, defs);
});

const solvePartOne = (data, methodArray) => {
  var count = 0;
  data.forEach((row) => {
    var values = row.split(",").map(Number);
    values.forEach((v) => {
      var hasSomeInvalid = !methodArray.some((func) => func(v));
      if (hasSomeInvalid) {
        count += v;
      }
    });
  });
  console.log(count);
};
solvePartOne(example, exampleDefs);

/*










var def = {
  "departure location": (number) => (number >= 45 && number < 535) || (number >= 550 && number <= 961),
  "departure station": (number) => (number >= 45 && number < 278) || (number >= 294 && number <= 974),
  "departure platform": (number) => (number >= 46 && number < 121) || (number >= 138 && number <= 965),
  "departure track": (number) => (number >= 38 && number < 149) || (number >= 173 && number <= 949),
  "departure date": (number) => (number >= 34 && number < 223) || (number >= 248 && number <= 957),
  "departure time": (number) => (number >= 32 && number < 64) || (number >= 79 && number <= 952),
  "arrival location": (number) => (number >= 49 && number < 879) || (number >= 905 && number <= 968),
  "arrival station": (number) => (number >= 47 && number < 306) || (number >= 323 && number <= 973),
  "arrival platform": (number) => (number >= 46 && number < 823) || (number >= 834 && number <= 971),
  "arrival track": (number) => (number >= 30 && number < 464) || (number >= 486 && number <= 963),
  class: (number) => (number > 40 && number < 350) || (number >= 372 && number <= 965),
  duration: (number) => (number > 47 && number < 414) || (number >= 423 && number <= 950),
  price: (number) => (number > 45 && number < 507) || (number >= 526 && number <= 956),
  route: (number) => (number > 42 && number < 779) || (number >= 799 && number <= 970),
  row: (number) => (number > 26 && number < 865) || (number >= 872 && number <= 955),
  seat: (number) => (number > 43 && number < 724) || (number >= 739 && number <= 970),
  train: (number) => (number > 25 && number < 914) || (number >= 926 && number <= 958),
  type: (number) => (number > 33 && number < 205) || (number >= 218 && number <= 965),
  wagon: (number) => (number > 43 && number < 101) || (number >= 118 && number <= 951),
  zone: (number) => (number > 45 && number < 844) || (number >= 858 && number <= 970),
};





*/
