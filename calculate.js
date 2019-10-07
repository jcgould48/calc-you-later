

function calculate(num1, num2, enteredOp) {
  
  const convertedNum1 = Number(num1);
  const convertedNum2 = Number(num2);
  const operation = enteredOp.toLowerCase();

  if(operation === '+' || operation === 'plus'){
    return convertedNum1 + convertedNum2;
  }
  else if (operation === '-'|| operation === 'minus'){
    return convertedNum1 - convertedNum2;
  }
  else if (operation === 'x' || operation === 'times'){
      return convertedNum1 * convertedNum2;
  }
  else if (operation === '/' || operation === 'divided by'){
      return convertedNum1 / convertedNum2;
  }
  else if (operation === '%' || operation === 'modulus'  || operation === 'mod'){
    return convertedNum1 % convertedNum2;
}
else {
    return "Sorry, that's not a mathematical operation!";
}

  } 




module.exports = calculate;