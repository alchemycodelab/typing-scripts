//Checks if a number is greater than 10
function isGreaterThanTen(number) {
    if(number >= 10) {
        return number + ' is greater than ten';
    }
}
isGreaterThanTen(12);


// Checks if a number is positive or negative 
function positiveOrNegative(number) {
    if(number > 0) {
        return 'The number is positive';
    } else {
        return 'The number is negative';
    }
}
positiveOrNegative(5);
positiveOrNegative(-18);
  

// Checks if a number is positive, negative or zero
function numberTest(number) {
    if(number > 0) {
        return 'The number is positive';
    }
    else if(number === 0) {
        return 'Number is exactly 0';
    }	
    else {
        return 'The number is negative';
    }
}
numberTest(12);
numberTest(0);
numberTest(-2);


// Checks a number in different ranges
function testSize(num) {
    if(num < 5){
        return 'Tiny';
    } 
    else if(num < 10){
        return 'Small';
    } 
    else if(num < 15){
        return 'Medium';
    } 
    else if(num < 20){
        return 'Large';
    } 
    else if(num >= 20) {
        return 'Huge';
    }
    else {
        return 'Parameter is not a number';
    }
}
testSize(3);
testSize(7);
testSize(11);
testSize(19);
testSize(28);
testSize('A nice string');
