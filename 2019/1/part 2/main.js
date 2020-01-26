const { massList } = require("./input.json");

let total = 0;

const singletonCalculator = mass => {
	const calc = Math.floor( mass / 3 ) - 2;
	if (calc <= 0) return;
	total += calc;
	singletonCalculator(calc);
};

massList.forEach(mass => singletonCalculator(mass));
