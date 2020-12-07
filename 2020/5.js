console.log(
  "RESULT: ",
  document
    .querySelector("pre")
    .textContent.split("\n")
    .filter(Boolean)
    .map((string) => /([FB]{7})([RL]{3})/.exec(string))
    .map((something) => {
      console.log(something);
      return {
        row: something[1].replace(/F/g, "0").replace(/B/g, "1"),
        col: something[2].replace(/L/g, "0").replace(/R/g, "1"),
      };
    })
    .map(({ row, col }) => parseInt(row, 2) * 8 + parseInt(col, 2))
    .reduce((highestSeatId, seatId) => Math.max(seatId, highestSeatId), 0)
);
