const numbers = [23, 2, 12, 9, 45];

let sum = 0;

for(let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    sum += number;
}

console.log('sum of numbers is', sum);
