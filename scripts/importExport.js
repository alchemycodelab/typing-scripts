// EXAMPLE 1
// File one: exporting a function
    // file name someOtherFile.js
    
function addTwoNumbers(numOne, numTwo) {
    return numOne + numTwo;
}

export default addTwoNumbers;


// File two: importing a function 
import addTwoNumbers from './someOtherFile.js';

addTwoNumbers(10, 40);


//EXAMPLE 2
// File one: exporting a function
    // file name squareFunction.js
    
export default function squareANumber(number) {
    return Math.pow(number, 2);
};


// File two: importing a function
import squareANumber  from './squareFunction.js'

squareANumber(5);
