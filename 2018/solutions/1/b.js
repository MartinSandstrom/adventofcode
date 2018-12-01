var fs = require('fs');

fs.readFile("../../test-data/1.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    console.log('answer', doMagic(data));
});

const doMagic = (input) => {
  let lines = input.split('\n');
  const list = [0, ];
  let acc = 0;
  let found = false;

  lines = lines.filter(Boolean);

  while(!found) {
    lines.forEach(item => {
      acc = eval(`${acc} ${item}`);
      if (list.includes(acc)) {
        console.log('FOUND:', acc);
        throw BreakException;
      }
      list.push(acc);
    });
  }
}
