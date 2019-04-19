const test = Qunit.test;

function truthTeller(someBoolean) {
    return someBoolean;
}

Test('It returns the boolean true', function(assert) {

    //Arrange
    const truthyThing = true;
    const expectedResult = true;
    //Act
    const result = truthTeller(truthyThing);
    //Assert
    assert.equal(result, expectedResult);

})

test('It returns any boolean given', function(assert) {

    //Arrange
    const someBoolean = false;
    const expectedResult = false;
    //Act
    const result = truthTeller(someBoolean);
    //Assert
    assert.equal(expectedResult, result);

})
