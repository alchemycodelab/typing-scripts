// example one:
const p = document.createElement('p');
p.textContent = 'hello paragraph';
document.body.appendChild(p);

// example two:
const parts = document.querySelectorAll('.parts');

const div = document.createElement('div');
div.textContent = 'hello div';
div.classList.add('part');

parts.appendChild(div);

// example three:
const word = document.getElementById('word')
const letters = ['a', 'b', 'c'];

for(let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    
    const span = document.createElement('span');
    span.textContent = letter;

    word.appendChild(span);
}

