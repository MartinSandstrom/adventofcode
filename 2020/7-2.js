var rows = document.querySelector("pre").textContent.split(".\n");

var countRecursive = (row, array) => {
  if (row.includes("contain no other bags")) return 0;

  const allItems = row.split("contain ")[1];
  const test = allItems.split(", ");
  var count = test.reduce((acc, curr) => {
    const [number, ...rest] = curr.split(" ");
    const bag = rest.join(" ");
    var bagRow = array.filter((r) => r.indexOf(bag) === 0);
    var bagCount = countRecursive(bagRow[0], array);
    return acc + +number + +bagCount * +number;
  }, 0);
  console.log("Count for row: ", row);
  console.log("Is: ", count);
  return count;
};

var initRow = rows.filter((r) => r.indexOf("shiny gold bag") === 0);

countRecursive(initRow[0], rows);
