// file: add-two-numbers.js
function addTwoNumbers(numOne, numTwo) {
    return numOne + numTwo;
}

export default addTwoNumbers;


// file: calculator.js
import addTwoNumbers from './add-two-numbers.js';

const sum = addTwoNumbers(10, 40);
console.log('sum is', sum);


// file square-number.js
function squareNumber(number) {
    return Math.pow(number, 2);
};

export default squareNumber


// file: calculator.js
import addTwoNumbers from './add-two-numbers.js';
import squareNumber  from './square-number.js'

const sum = addTwoNumbers(10, 40);
console.log('sum is', sum);

const square = squareNumber(5);
console.log('square is', square);
