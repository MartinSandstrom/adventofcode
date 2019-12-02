var fs = require('fs');


/*

calculateMass(
  amountOfFuel = roundDown(mass / 3) - 2
)

[mass, mass, mass, mass]

forEach mass totalMass+=mass;


*/

fs.readFile("./data.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    console.log('answer', doMagic(data));
});

const doMagic = (input) => {

  const masses = input.split('\n').filter(Boolean);

  const totalFuel = masses.reduce( (totalFuel, currentMass) => {
    const fuelToBeAdded = getFuelFromMass(currentMass);
    return totalFuel + fuelToBeAdded;
  }, 0);

  return totalFuel;
}

const getFuelFromMass = (mass) => {
  return  Math.floor(mass / 3) - 2;;
}


console.log('FOR: 12 right is 2. MY answer =  ', getFuelFromMass(12));
console.log('FOR: 14 right is 2. MY answer =  ', getFuelFromMass(14));
console.log('FOR: 1969 right is 654. MY answer =  ', getFuelFromMass(1969));
console.log('FOR: 100756 right is 33583. MY answer =  ', getFuelFromMass(100756));
