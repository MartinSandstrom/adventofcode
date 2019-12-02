var fs = require('fs');

fs.readFile("./data.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    console.log('answer', doMagic(data));
});

const doMagic = input => {
  const array = input.split(',').filter(Boolean).map(v => Number(v));

  array[1] = 12;
  array[2] = 2;

  return haltTheProgram(array);
}

const haltTheProgram = array => {
  for(let i = 0; i < array.length; i = i + 4) {
    if (array[i] === 99) {
      return array[0];
    }
    let nextValue = array[i + 1];
    let nextNextValue = array[i + 2];
    let nextNextNextValue = array[i + 3];
    if (array[i] === 1) {
      array[nextNextNextValue] = array[nextValue] + array[nextNextValue];
    } else if (array[i] === 2 ) {
      array[nextNextNextValue] = array[nextValue] * array[nextNextValue];
    }
  }
}
