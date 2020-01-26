const { massList } = require("./input.json");

const fuelCalculator = mass => Math.floor(mass / 3) - 2;

const calculateAll = arr => arr.reduce((a,b) => a + fuelCalculator(b), 0);

const result = calculateAll(massList);

console.log("Result is: ", result);
