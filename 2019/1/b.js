var fs = require('fs');


/*

calculateMass(amountOfFuel = roundDown(mass / 3) - 2)

[mass, mass, mass, mass]

forEach mass totalMass+=mass + extraFuel = roundDown(fuel / 3) - 2;


*/

fs.readFile("./data.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    console.log('answer', doMagic(data));
});

const doMagic = (input) => {
  const masses = input.split('\n').filter(Boolean);
  const result = getResult(masses);
  return result;

}

const getResult = (masses) => {
  const totalFuelFromMass = masses.reduce( (totalFuel, currentMass) => {
    const fuelToBeAdded = getFuelAndFuelForFuel(currentMass);
    return totalFuel + fuelToBeAdded;
  }, 0);

  return totalFuelFromMass;
}

const getFuelAndFuelForFuel = (mass) => {
  const massFuel = getFuelFromWeigth(mass);
  let totalFuel = massFuel;
  let fuelFromFuel = massFuel;
  while(fuelFromFuel > 0) {
    fuelFromFuel = getFuelFromWeigth(fuelFromFuel);
    if (fuelFromFuel > 0) {
      totalFuel += fuelFromFuel;
    }
  }
  return totalFuel;
}

const getFuelFromWeigth = (mass) => {
  return  Math.floor(mass / 3) - 2;;
}

console.log('FOR: 14 right is 2. MY answer =  ', getResult([14]));
console.log('FOR: 1969 right is 966. MY answer =  ', getResult([1969]));
console.log('FOR: 100756 right is 50346. MY answer =  ', getResult([100756]));
