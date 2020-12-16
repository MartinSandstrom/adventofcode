/*
departure location: 45-535 or 550-961
departure station: 45-278 or 294-974
departure platform: 46-121 or 138-965
departure track: 38-149 or 173-949
departure date: 34-223 or 248-957
departure time: 32-64 or 79-952
arrival location: 49-879 or 905-968
arrival station: 47-306 or 323-973
arrival platform: 46-823 or 834-971
arrival track: 30-464 or 486-963
class: 40-350 or 372-965
duration: 47-414 or 423-950
price: 45-507 or 526-956
route: 42-779 or 799-970
row: 26-865 or 872-955
seat: 43-724 or 739-970
train: 25-914 or 926-958
type: 33-205 or 218-965
wagon: 43-101 or 118-951
zone: 45-844 or 858-970

*/

var def = {
  "departure location": (number) => (number >= 45 && number <= 535) || (number >= 550 && number <= 961),
  "departure station": (number) => (number >= 45 && number <= 278) || (number >= 294 && number <= 974),
  "departure platform": (number) => (number >= 46 && number <= 121) || (number >= 138 && number <= 965),
  "departure track": (number) => (number >= 38 && number <= 149) || (number >= 173 && number <= 949),
  "departure date": (number) => (number >= 34 && number <= 223) || (number >= 248 && number <= 957),
  "departure time": (number) => (number >= 32 && number <= 64) || (number >= 79 && number <= 952),
  "arrival location": (number) => (number >= 49 && number <= 879) || (number >= 905 && number <= 968),
  "arrival station": (number) => (number >= 47 && number <= 306) || (number >= 323 && number <= 973),
  "arrival platform": (number) => (number >= 46 && number <= 823) || (number >= 834 && number <= 971),
  "arrival track": (number) => (number >= 30 && number <= 464) || (number >= 486 && number <= 963),
  class: (number) => (number >= 40 && number <= 350) || (number >= 372 && number <= 965),
  duration: (number) => (number >= 47 && number <= 414) || (number >= 423 && number <= 950),
  price: (number) => (number >= 45 && number <= 507) || (number >= 526 && number <= 956),
  route: (number) => (number >= 42 && number <= 779) || (number >= 799 && number <= 970),
  row: (number) => (number >= 26 && number <= 865) || (number >= 872 && number <= 955),
  seat: (number) => (number >= 43 && number <= 724) || (number >= 739 && number <= 970),
  train: (number) => (number >= 25 && number <= 914) || (number >= 926 && number <= 958),
  type: (number) => (number >= 33 && number <= 205) || (number >= 218 && number <= 965),
  wagon: (number) => (number >= 43 && number <= 101) || (number >= 118 && number <= 951),
  zone: (number) => (number >= 45 && number <= 844) || (number >= 858 && number <= 970),
};

var defArray = [
  def["departure location"],
  def["departure station"],
  def["departure platform"],
  def["departure track"],
  def["departure date"],
  def["departure time"],
  def["arrival location"],
  def["arrival station"],
  def["arrival platform"],
  def["arrival track"],
  def["class"],
  def["duration"],
  def["price"],
  def["route"],
  def["row"],
  def["seat"],
  def["train"],
  def["type"],
  def["wagon"],
  def["zone"],
];

var myTicket = "173,191,61,199,101,179,257,79,193,223,139,97,83,197,251,53,89,149,181,59";

var exampleDefs = {
  class: (number) => (number >= 0 && number <= 1) || (number >= 4 && number <= 19),
  row: (number) => (number >= 0 && number <= 5) || (number >= 8 && number <= 19),
  seat: (number) => (number >= 0 && number <= 13) || (number >= 16 && number <= 19),
};

var exampleDefsArray = [exampleDefs["class"], exampleDefs["row"], exampleDefs["seat"]];

var example = ["3,9,18", "15,1,5", "55,2,20", "5,14,9"];

var exampelMyTicket = "11,12,13";

var fs = require("fs");

fs.readFile("./pussel.txt", "utf8", function (error, data) {
  if (error) {
    console.log(error);
  }
  const all = data.split("\n").filter(Boolean);
  solvePartTwo(all, def, defArray, myTicket);
});

const getValidTickets = (data, methodArray) => {
  var valid = [];
  data.forEach((row) => {
    var values = row.split(",").map(Number);
    var isValid = true;
    values.forEach((v) => {
      var hasSomeInvalid = !methodArray.some((func) => func(v));
      if (hasSomeInvalid) {
        isValid = false;
      }
    });
    if (isValid) {
      valid.push(row);
    }
  });
  return valid;
};

const solvePartTwo = (data, methods, methodArray, myTicket) => {
  var allValid = getValidTickets(data, methodArray);
  var nearTicketsArray = allValid.map((d) => d.split(",").map(Number));
  var ticketArray = myTicket.split(",").map(Number);
  var order = new Map();
  var length = nearTicketsArray[0].length;
  // Loop all values and find the one with 90 instead?
  var allMethods = [
    "departure location",
    "departure station",
    "departure platform",
    "departure track",
    "departure date",
    "departure time",
    "arrival location",
    "arrival station",
    "arrival platform",
    "arrival track",
    "class",
    "duration",
    "price",
    "route",
    "row",
    "seat",
    "train",
    "type",
    "wagon",
    "zone",
  ];

  var found = 0;

  while (found < 20) {
    for (let i = 0; i < allMethods.length; i++) {
      var method = allMethods[i];
      var allFoundForMethod = [];
      for (let j = 0; j < length; j++) {
        var count = 0;
        nearTicketsArray.forEach((nearTicket) => {
          var ticket = nearTicket[j];
          var func = methods[method];
          if (func(ticket)) {
            count++;
          }
        });
        if (count === nearTicketsArray.length) {
          allFoundForMethod.push({ j, method });
        }
      }
      allFoundForMethod = allFoundForMethod.filter((a) => !order.has(a.j));
      if (allFoundForMethod.length === 1) {
        order.set(allFoundForMethod[0].j, allFoundForMethod[0].method);
        found++;
        break;
      }
    }
  }

  var result = 1;
  var array = [...order].filter(([number, method]) => method.includes("departure"));
  array.forEach(([number, method]) => {
    result *= ticketArray[number];
  });
  console.log(result);
};

//solvePartTwo(example, exampleDefs, exampleDefsArray, exampelMyTicket);

/*

190 är rätt längd



NOT: 
3877315012651
1686545095189
18452216268931
<

1686545095189



var allPossible = new Map();
    nearTicketsArray.forEach((nearTicket) => {
      var ticket = nearTicket[i];
      for (const [key, func] of Object.entries(methods)) {
        var isValid = func(ticket);
        if (isValid && !order.includes(key)) {
          if (allPossible.has(key)) {
            allPossible.set(key, allPossible.get(key) + 1);
          } else {
            allPossible.set(key, 1);
          }
        }
      }
    });
    var array = [...allPossible];
    var maxValue = Math.max(...array.map(([key, value]) => value));
    if (maxValue !== nearTicketsArray.length) {
      console.log(array);
    }
    const correctArr = array.find(([key, value]) => value === nearTicketsArray.length);

    var functionName = correctArr[0];
    order.push(functionName);




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
