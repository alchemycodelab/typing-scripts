const test = QUnit.test;

test('that true equals true', function(assert) {
    assert.equal(true, true);
});

test('that two strings are equal', function(assert) {
    assert.equal('banana', 'banana');
});

// this test should fail
test('that true equals false', function(assert) {
    assert.equal(true, false);
});
