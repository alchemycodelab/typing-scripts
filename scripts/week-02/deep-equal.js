const test = QUnit.test;

test('gets correct cat', (assert) => {
    const expected = {
        name: 'felix',
        type: 'tuxedo',
        famous: true,
        remainingLives: 1
    };

    const cat = getCat();

    assert.deepEqual(cat, expected);
});