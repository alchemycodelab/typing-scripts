
const timesClicked = document.getElementById('clicks');
const button = document.getElementById('button');

let clicks = 0;

button.addEventListener('click', function() {
    clicks++;
    timesClicked.textContent = clicks + ' clicks';
});