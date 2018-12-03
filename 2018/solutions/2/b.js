var fs = require('fs');

fs.readFile("../../test-data/2.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    console.log('answer', doMagic(data));
});

const doMagic = (input) => {
  let arr = input.split('\n')
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const charsI = [...arr[i]]
      const charsJ = [...arr[j]]

      let diff = charsI.reduce((a, c, i) => a + (c === charsJ[i] ? 0 : 1), 0)

      if (diff === 1) {
        console.log(arr[i])
        console.log(arr[j])
      }
    }
  }
}
