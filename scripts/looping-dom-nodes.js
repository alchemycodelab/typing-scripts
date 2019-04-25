const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length; i++) {
    const button = buttons[i];

    danceButton.addEventListener('click', function() {
        console.log('clicked button', button);
    });
}

const parts = document.querySelectorAll('.part');

for(let i = 0; i < parts.length; i++) {
    const part = parts[i];
    part.classList.remove('dance');
}
