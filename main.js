let firstNumber = 0;
let secondNumber = 0;
let operator = "+";

function addNumber(a, b){
  return a + b;
}

function subtractNumber(a, b){
  return a - b;
}

function divideNumber(a, b){
  return a/b
}

function multiplyNumber(a, b){
  return  a * b
}


function operate(number, operator, secondNumber){
if(operator === "+"){
  return addNumber(number, secondNumber)
} else if(operator === "-"){
  return subtractNumber(number, secondNumber);
} else if(operator === "/"){
  return divideNumber(number, secondNumber);
} else if(operator === "*"){
  return multiplyNumber(number, secondNumber);
}
}

