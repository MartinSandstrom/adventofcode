console.log(
  "RESULT: ",
  document
    .querySelector("pre")
    .textContent.split("\n\n")
    .filter((blob) => ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"].every((r) => blob.includes(r))).length
);
