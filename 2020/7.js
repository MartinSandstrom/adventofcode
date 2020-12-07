var rows = document.querySelector("pre").textContent.split("\n");

var findColorsRecursive = (row, array) => {
  const first = row.split(" contain")[0];
  const color = first.split(" bag")[0];
  colors.add(color);
  const existsIn = array.filter((r) => r.indexOf(color) > 0);
  existsIn.forEach((row) => findColorsRecursive(row, array));
};

var initRows = rows.filter((r) => r.indexOf("shiny gold bag") > 0);

var colors = new Set(initRows.map((r) => r.split(" contain")[0].split(" bags")[0]));
[...initRows].forEach((i) => {
  findColorsRecursive(i, rows);
});
console.log(colors.size);
