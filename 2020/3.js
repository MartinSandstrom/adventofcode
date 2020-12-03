console.log(
  "RESULT: ",
  [
    { right: 1, down: 1 },
    { right: 3, down: 1 },
    { right: 5, down: 1 },
    { right: 7, down: 1 },
    { right: 1, down: 2 },
  ].reduce((total, { right, down }, runIndex) => {
    var count = document
      .querySelector("pre")
      .textContent.split("\n")
      .filter(Boolean)
      .reduce(
        ({ rightPosition, trees }, currentRow, index) => ({
          rightPosition: rightPosition + right,
          trees:
            index % down === 0 &&
            currentRow.repeat(rightPosition)[rightPosition] === "#"
              ? trees + 1
              : trees,
        }),
        { rightPosition: 0, trees: 0 }
      ).trees;
    console.log(`SLOPE ${runIndex + 1} = ${count} `);
    return total * count;
  }, 1)
);
