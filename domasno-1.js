
const operator = +
const number1 = 2
const number2 = 3

let result

if (operator == '+') {
    result = number1 + number2
}
else if (operator == '-') {
    result = number1 - number2
}
else if (operator == '*') {
    result = number1 * number2
}
else {
    result = number1 / number2
}
console.log('${number1} ${operator} ${number2} = ${result}')
