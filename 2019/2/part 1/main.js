const { input } = require("../input.json");

const arr = input
  .split(',')
  .map(Number);

const resetState = () => {
  arr[1] = 12;
  arr[2] = 2;
}

const solve = index => {
  const [opcode, int1, int2, responsePosition] = arr.slice(index, index + 4);

  switch(opcode) {
    case 99: return;
    case 1: arr[responsePosition] = arr[int1] + arr[int2]; 
      break;
    case 2: arr[responsePosition] = arr[int1] * arr[int2];
      break;
    default:
      break;
  }
  solve(index + 4);
}

resetState();
solve(0);
console.log(arr[0]);
