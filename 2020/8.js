var findRecursiveCount = (rows, index, allSeen, count) => {
  if (allSeen.has(index)) {
    console.log("Seen twice", count);
    return;
  }
  var [instruction, value] = rows[index].split(" ");
  allSeen.add(index);
  findRecursiveCount(
    rows,
    instruction === "jmp" ? index + eval(value) : ++index,
    allSeen,
    instruction === "acc" ? count + eval(value) : count
  );
};

var rows = document.querySelector("pre").textContent.split("\n").filter(Boolean);
findRecursiveCount(rows, 0, new Set(), 0);
