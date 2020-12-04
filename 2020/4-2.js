var isValidObject = {
  byr: (value) => +value >= 1920 && +value <= 2002,
  iyr: (value) => +value >= 2010 && +value <= 2020,
  eyr: (value) => +value >= 2020 && +value <= 2030,
  hgt: (value) =>
    (value.includes("cm") && +value.split("cm")[0] >= 150 && +value.split("cm")[0] <= 193) ||
    (value.includes("in") && +value.split("in")[0] >= 59 && +value.split("in")[0] <= 76),
  hcl: (value) =>
    value[0] === "#" &&
    value
      .split("#")[1]
      .split("")
      .every((v) => ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"].some((c) => c.includes(v))),
  ecl: (value) => ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].some((v) => value === v),
  pid: (value) => value.split("").length === 9 && value.split("").every((v) => "0123456789".includes(v)),
};

console.log(
  "RESULT: ",
  document
    .querySelector("pre")
    .textContent.split("\n\n")
    .map((thing) => thing.split("\n").join(" "))
    .filter((oneLine) =>
      ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"].every(
        (r) =>
          oneLine.includes(r) &&
          isValidObject[r](
            oneLine
              .split(" ")
              .find((l) => l.includes(r))
              .split(":")[1]
          )
      )
    ).length
);
