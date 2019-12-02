var fs = require('fs');


fs.readFile("./data.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    console.log('answer', doMagic(data));
});

const doMagic = (input) => {
  let array = input.split(',').filter(Boolean).map(v => Number(v));

  for(let noun = 0; noun < 100; noun++) {
    for(let verb = 0; verb < 100; verb++) {
      const result = haltWithNewParams(noun, verb, [...array]);
      if (result === 19690720) {
        return 100 * noun + verb;
      }
    }
  }
}


const haltWithNewParams = (noun, verb, array) => {
  array[1] = noun;
  array[2] = verb;
  const result = haltTheProgram(array);
  return result;
}


const haltTheProgram = (array) => {
  for(let i = 0; i < array.length; i = i + 4) {
    if (array[i] === 99) {
      return array[0];
    } else if (array[i] === 1) {
      let nextValue = array[i + 1];
      let nextNextValue = array[i + 2];
      let nextNextNextValue = array[i + 3];
      array[nextNextNextValue] = array[nextValue] + array[nextNextValue];
    } else if (array[i] === 2 ) {
      let nextValue = array[i + 1];
      let nextNextValue = array[i + 2];
      let nextNextNextValue = array[i + 3];
      array[nextNextNextValue] = array[nextValue] * array[nextNextValue];
    }
  }
}
