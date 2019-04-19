
const test = Qunit.test;

function findtheOppositeNumber(someNum) {
    return someNum * -1;
}
test('It returns the opposite of a number', function(assert) {

    //Arrange
    const someNumber = 45;
    const expectedResult = -45

    const result = findtheOppositeNumber(someNumber);
    
    assert.equal(result, expectedResult)

})
