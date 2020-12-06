console.log(
  "RESULT: ",
  document
    .querySelector("pre")
    .textContent.split("\n\n")
    .map((blob) => new Set(blob.split("\n").join("")))
    .reduce((acc, set) => acc + set.size, 0)
);
