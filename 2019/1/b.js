var fs = require('fs');

fs.readFile("./data.txt", "utf8", function (error, data) {
    if(error) {
        console.log(error);
    }
    console.log('answer', doMagic(data));
});

const doMagic = input => {
  const masses = input.split('\n').filter(Boolean);
  return getTotalFuel(masses);
}

const getTotalFuel = masses => {
  return masses.reduce((totalFuel, currentMass) => {
    const fuelToBeAdded = getFuelAndFuelForFuel(currentMass);
    return totalFuel + fuelToBeAdded;
  }, 0);
}

const getFuelAndFuelForFuel = mass => {
  const massFuel = getFuelFromMass(mass);
  let totalFuel = massFuel;
  let fuelFromFuel = massFuel;
  while (fuelFromFuel > 0) {
    fuelFromFuel = getFuelFromMass(fuelFromFuel);
    if (fuelFromFuel > 0) {
      totalFuel += fuelFromFuel;
    }
  }
  return totalFuel;
}
const getFuelFromMass = mass => Math.floor(mass / 3) - 2;


console.log('FOR: 14 right is 2. MY answer =  ', getTotalFuel([14]));
console.log('FOR: 1969 right is 966. MY answer =  ', getTotalFuel([1969]));
console.log('FOR: 100756 right is 50346. MY answer =  ', getTotalFuel([100756]));
