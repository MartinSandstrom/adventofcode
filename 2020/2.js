console.log(
  "RESULT: ",
  document
    .querySelector("pre")
    .textContent.split("\n")
    .filter(Boolean)
    .map((r) => {
      const [, min, max, letter, password] = /(\d+)-(\d+) ([a-z]): ([a-z]+)/g.exec(r);
      return {
        min,
        max,
        numberOfChars: [...password].filter((c) => c == letter).length,
      };
    })
    .filter(({ numberOfChars, min, max }) => numberOfChars <= max && numberOfChars >= min).length
);

console.log(
  "RESULT: ",
  document
    .querySelector("pre")
    .textContent.split("\n")
    .filter(Boolean)
    .reduce((numberOfCorret, curr) => {
      const rowInfo = curr.split(" ");
      return (rowInfo[2][rowInfo[0].split("-")[0] - 1] === rowInfo[1][0] && rowInfo[2][rowInfo[0].split("-")[1] - 1] !== rowInfo[1][0]) ||
        (rowInfo[2][rowInfo[0].split("-")[1] - 1] === rowInfo[1][0] && rowInfo[2][rowInfo[0].split("-")[0] - 1] !== rowInfo[1][0])
        ? numberOfCorret + 1
        : numberOfCorret;
    }, 0)
);
