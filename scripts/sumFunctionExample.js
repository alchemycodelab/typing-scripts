const test = Qunit.test;

function sum(numOne, numTwo) {
    return numOne + numTwo
}
test('It returns the sum of two numbers', function(assert) {

    //Arrange
    const numberOne = 45;
    const numberTwo = 3;
    const expectedResult = 48;
    
    //Act
    const result = sum(numberOne, numberTwo);
    
    //Assert
    assert.equal(result, expectedResult)

})
