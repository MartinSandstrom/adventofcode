var isValidObject = {
  byr: (value) => +value >= 1920 && +value <= 2002,
  iyr: (value) => +value >= 2010 && +value <= 2020,
  eyr: (value) => +value >= 2020 && +value <= 2030,
  hgt: (value) =>
    (value.includes("cm") && +value.split("cm")[0] >= 150 && +value.split("cm")[0] <= 193) ||
    (value.includes("in") && +value.split("in")[0] >= 59 && +value.split("in")[0] <= 76),
  hcl: (value) => RegExp("^#[a-f-f0-9]{6}").test(value),
  ecl: (value) => new Set(["amb", "blu", "brn", "gry", "grn", "hzl", "oth"]).has(value),
  pid: (value) => RegExp("^[0-9]{9}$").test(value),
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
