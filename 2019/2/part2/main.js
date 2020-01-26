const { input } = require("../input.json");

const generateArray = (pair) => {
  const arr = input
  .split(',')
  .map(Number);

  const resetState = (noun, verb) => {
    arr[1] = noun;
    arr[2] = verb;
  }
  resetState(pair.n, pair.v);
  return arr;
}

const solve = (arr, index) => {
  const [opcode, int1, int2, responsePosition] = arr.slice(index, index + 4);

  switch(opcode) {
    case 99:
      return;
    case 1: arr[responsePosition] = arr[int1] + arr[int2]; 
      break;
    case 2: arr[responsePosition] = arr[int1] * arr[int2];
      break;
    default:
      break;
  }
  solve(arr, index + 4);
}

for (let n = 0; n < 99; n++) {
  for (let v =0; v < 99; v++) {
    const arr = generateArray({n, v});
    solve(arr, 0);
    if (arr[0] === 19690720) {
      console.log(100 * n + v);
    }
  }
}
