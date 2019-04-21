
const headsRadioButton = document.getElementById('heads-button');
const coinImage = document.getElementById('coin-image');

let imageSource = '';

if(headsRadioButton.checked) {
    imageSource = 'assets/heads.jpg';
}
else {
    imageSource = 'assets/tails.jpg';
}

coinImage.src = imageSource;
