const test = QUnit.test;

test('that true equals true', (assert) => {
    assert.equal(true, true);
});

test('that two strings are equal', (assert) => {
    const expected = 'banana';
    const actual = 'banana';
    assert.equal(actual, expected);
});

// this test should fail!
test('that true equals false', (assert) => {
    assert.equal(true, false);
});
