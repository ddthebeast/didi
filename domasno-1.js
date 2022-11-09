const number1 = 20;
const number2 = 30;
const sign = '+';

calculator(number1, number2, sign);

function calculator(number1, number2, sign) {
    let result = ''};
    if (sign === '+') {
        result = number1 + number2;
    } 
    else if (sign === '-') {
        result = number1 - number2;
    } 
    else if (sign === '/' || sign === ':') {
        result = number1 / number2;
    } 
    else if (sign === '*') {
        result = number1 * number2;
    }
    else (result = undefined)
    
    console.log("Result is: " + result);
