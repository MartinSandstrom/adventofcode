console.log(
  "RESULT: ",
  document
    .querySelector("pre")
    .textContent.split("\n\n")
    .map((thing) => thing.split("\n").filter(Boolean))
    .map((group) => {
      const allAnswers = new Set(group.join(""));
      return [...allAnswers].reduce((acc, curr) => (group.every((p) => p.includes(curr)) ? acc + 1 : acc), 0);
    })
    .reduce((acc, count) => acc + count, 0)
);
