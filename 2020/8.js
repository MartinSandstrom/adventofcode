var findRecursiveCount = (rows, index, allSeen, count) => {
  if (allSeen.has(index)) {
    console.log("AllSeen", count);
    return;
  }
  var [instruction, value] = rows[index].split(" ");
  allSeen.add(index);
  if (instruction === "nop") findRecursiveCount(rows, ++index, allSeen, count);
  else if (instruction === "acc") findRecursiveCount(rows, ++index, allSeen, count + eval(value));
  else if (instruction === "jmp") findRecursiveCount(rows, index + eval(value), allSeen, count);
};

var rows = document.querySelector("pre").textContent.split("\n").filter(Boolean);
findRecursiveCount(rows, 0, new Set(), 0);
