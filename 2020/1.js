var text = document.querySelector("pre").textContent;
var list = text.split("\n");
var c = {};
list.forEach((l) => {
  if (c[2020 - l]) {
    console.log("RESULT: ", l * (2020 - l));
  } else {
    c[l] = l;
  }
});

var text = document.querySelector("pre").textContent;
var list = text.split("\n");
var c = {};
list.forEach((l) => {
  list.forEach((j) => {
    list.forEach((k) => {
      if (parseInt(l, 10) + parseInt(j, 10) + parseInt(k, 10) === 2020) {
        console.log("RESULT: ", l * j * k);
      }
    });
  });
});
