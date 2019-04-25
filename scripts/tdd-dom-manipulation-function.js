const test = QUnit.test;

function addPart(name, parent) {
    const image = document.createElement('img');
    const imageSource = './assets/' + name + '.jpg';
    image.src = imageSource;
    parent.appendChild(image);
}

test('adds new part', (assert) => {
    // arrange
    const parent = document.createElement('div');
    const name = 'banana';
    const expected = '<img src="./assets/banana.jpg">';

    // act
    addPart(name, parent);

    // assert
    assert.equal(parent.innerHTML, expected);
});