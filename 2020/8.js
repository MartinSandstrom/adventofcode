var findRecursiveCount = (rows, index, allSeen, count) => {
  if (!rows[index]) {
    console.log("Has terminated", count);
  }
  var [instruction, value] = rows[index].split(" ");
  if (allSeen.has(index)) {
    console.log("Seen twice", count);
    return;
  }
  allSeen.add(index);
  if (instruction === "nop") {
    index++;
    findRecursiveCount(rows, index, allSeen, count);
  } else if (instruction === "acc") {
    count += eval(value);
    index++;
    findRecursiveCount(rows, index, allSeen, count);
  } else if (instruction === "jmp") {
    index += eval(value);
    findRecursiveCount(rows, index, allSeen, count);
  }
};

var rows = document.querySelector("pre").textContent.split("\n").filter(Boolean);
findRecursiveCount(rows, 0, new Set(), 0);
