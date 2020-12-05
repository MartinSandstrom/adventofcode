var calculateSeat = (b) => {
  const { rowMin, seatMin } = [...b].reduce(
    ({ rowMin, rowMax, seatMin, seatMax }, char) => ({
      rowMax: char === "F" ? rowMax - Math.ceil((rowMax - rowMin) / 2) : rowMax,
      rowMin: char === "B" ? rowMin + Math.ceil((rowMax - rowMin) / 2) : rowMin,
      seatMax: char === "L" ? seatMax - Math.ceil((seatMax - seatMin) / 2) : seatMax,
      seatMin: char === "R" ? seatMin + Math.ceil((seatMax - seatMin) / 2) : seatMin,
    }),
    {
      rowMin: 0,
      rowMax: 127,
      seatMin: 0,
      seatMax: 7,
    }
  );
  return rowMin * 8 + seatMin;
};

var allSeats = document
  .querySelector("pre")
  .textContent.split("\n")
  .reduce((set, binarySpacePartitioning) => set.add(calculateSeat(binarySpacePartitioning)), new Set());

for (var i = 100; i <= 800; i++) {
  if (!allSeats.has(i)) {
    console.log("Your seat", i);
  }
}
