const nameInput = document.getElementById('name');
const whoClicked = document.getElementById('who-clicked');
const button = document.getElementById('button');

button.addEventListener('click', () => {
    const name = nameInput.value;
    whoClicked.textContent = name + ' clicked the button';
});