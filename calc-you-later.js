const calculate = require('./calculate')



const num1 = process.argv[2];
const num2 = process.argv[3];
const enteredOp = process.argv[4];

const answer = calculate(num1, num2, enteredOp);

console.log(answer);
  