const fs = require("fs");

fs.readFile("./pussel.txt", "utf8", function (error, data) {
  if (error) {
    console.log(error);
  }
  solvePartTwo(data);
});

const expand = (i, rule, n8, n11, rules) => {
  if (i == 8 && n8 == 5) {
    return "(" + expand(42, rules[42], n8, n11, rules) + ")";
  }
  if (i == 11 && n11 == 5) {
    return "(" + expand(42, rules[42], n8, n11, rules) + expand(31, rules[31], n8, n11, rules) + ")";
  }
  n8 += i == 8;
  n11 += i == 11;
  if (rule[0] == '"') {
    return rule[1];
  }
  const middle = rule.split(" ").reduce((rule, part) => {
    if (part === "|") {
      return rule + "|";
    }
    return rule + expand(part, rules[part], n8, n11, rules);
  }, "");
  return "(" + middle + ")";
};

const solvePartTwo = (data) => {
  let [rules, msgs] = data.split("\n\n");
  rules = rules.replace("8: 42", "8: 42 | 42 8");
  rules = rules.replace("11: 42 31", "11: 42 31 | 42 11 31");
  rules = Object.fromEntries(rules.split("\n").map((rule) => rule.split(": ")));
  let n8 = 0;
  let n11 = 0;
  let rule = new RegExp("^" + expand(0, rules[0], 0, 0, rules) + "$", "gm");
  let matches = msgs.match(rule).length;
  console.log("Messages lines (part 2): " + matches);
};
