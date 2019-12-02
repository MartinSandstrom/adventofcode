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
      const resultArray = solve(noun, verb, [...array]);
      if(resultArray[0] === 19690720) {
        return 100 * noun + verb;
      }
    }
  }
}


const solve = (noun, verb, array) => {
  array[1] = noun;
  array[2] = verb;
  return haltTheProgram(array);
}


const haltTheProgram = (array) => {
  for(let i = 0; i < array.length; i = i + 4) {
    if (array[i] === 99) {
      return array;
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
