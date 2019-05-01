const tbody = document.getElementById('cats');

const cats = catApi.getAll();

for(let i = 0; i < cats.length; i++) {
    const cat = cats[i];

    const tr = document.createElement('tr');
    
    const nameCell = document.createElement('td');
    const link = document.createElement('a');
    link.href = 'cat-detail.html?name=' + cat.name;
    link.textContent = cat.name;
    nameCell.appendChild(link);
    tr.appendChild(nameCell);

    const typeCell = document.createElement('td');
    typeCell.textContent = cat.type;
    tr.appendChild(typeCell);

    const livesCell = document.createElement('td');
    livesCell.textContent = cat.lives;
    tr.appendChild(livesCell);

    tbody.appendChild(tr);
}
