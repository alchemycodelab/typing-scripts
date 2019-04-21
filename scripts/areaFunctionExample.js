const test = Qunit.test;

function calculateArea(sideOne, sideTwo) {
    return sideOne * sideTwo
}

test('It finds the area of a square', function(assert) {

    //Arrange
    const sideOne = 12;
    const sideTwo = 4;
    const expectedResult = 48;

    //Act
    const result = calculateArea(sideOne, sideTwo);
    
    //Assert
    assert.equal(result, expectedResult)
})
