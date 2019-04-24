const random = Math.random();

let result = '';

if(random < .333) {
    result = 'rock';
}
else if(random < .666) {
    result = 'paper'
}
else {
    result = 'scissors';
} 