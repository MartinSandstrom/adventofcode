const fs = require("fs");

fs.readFile("./pussel.txt", "utf8", function (error, data) {
  if (error) {
    console.log(error);
  }
  const [rules, rows] = data.split("\n\n");
  solvePartOne(rules.split("\n").filter(Boolean), rows);
});

const getCharMatch = (rule, rulesMap) => {
  if (rule[0] == '"') {
    return rule[1];
  }
  var middle = rule.split(" ").reduce((rule, part) => {
    if (part === "|") {
      return rule + part;
    }
    return rule + getCharMatch(rulesMap[part], rulesMap);
  }, "");
  return "(" + middle + ")";
};

const solvePartOne = (rules, rows) => {
  const rulesMap = {};
  rules.forEach((r) => {
    const [rulesNumber, instruction] = r.split(": ");
    rulesMap[rulesNumber] = instruction;
  });

  let rule = new RegExp("^" + getCharMatch(rulesMap[0], rulesMap) + "$", "gm");
  console.log(rule);
  let matches = rows.match(rule).length;
  console.log("Messages lines", matches);
};
