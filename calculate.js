

function calculate(num1, num2, enteredOp) {
  
  const convertedNum1 = Number(num1);
  const convertedNum2 = Number(num2);
  const operation = enteredOp.toLowerCase();

  if(operation === '+' || operation === 'plus' || operation.substring(0,3)==='add' ){
    return convertedNum1 + convertedNum2;
  }
  else if (operation === '-'|| operation === 'minus'|| operation.substring(0,3)=== 'sub'){
    return convertedNum1 - convertedNum2;
  }
  else if (operation === 'x' || operation === 'times'|| operation.substring(0,3)=== 'mul'){
      return convertedNum1 * convertedNum2;
  }
  else if (operation === '/' || operation.substring(0,3) === 'div'){
      return convertedNum1 / convertedNum2;
  }
  else if (operation === '%' || operation.substring(0,3) === 'mod'){
    return convertedNum1 % convertedNum2;
}
else {
    return "Sorry, that's not a mathematical operation!";
}
  } 

  3 multiplied by 5


module.exports = calculate;