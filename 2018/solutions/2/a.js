var fs = require('fs');

fs.readFile("../../test-data/2.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    console.log('answer', doMagic(data));
});

const doMagic = (input) => {
  const results = input.split('\n').reduce((acc, curr) => {
    const allInstances = new Set(curr.split(''));
    let containsThree = contiansNumberOfInstances(allInstances, 3, curr);
    let containsTwo = contiansNumberOfInstances(allInstances, 2, curr);
    return {
      2: acc[2] + (containsTwo ? 1 : 0),
      3: acc[3] + (containsThree ? 1 : 0)
    }
  }, { 2: 0, 3: 0 });
  return results[2] * results[3];
}

const contiansNumberOfInstances = (array, numberOfInstances, current) => [...array].some(char => current.match(new RegExp(char, "g")).length === numberOfInstances);
