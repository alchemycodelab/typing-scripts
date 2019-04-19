function aNiceFunction() {
    return 'I`m a SUPER nice function'
}

aNiceFunction()

function anotherNiceFunction() {
    return 'I`m another function!'
}
anotherNiceFunction()

function mathyFunction() {
    return 3 * 4;
}
mathyFunction()

function anotherMathyFunction() {
    return (3 * 3) - 6;
}
anotherMathyFunction()

function functionWithOneParameter(parameter) {
    return parameter
}

functionWithOneParameter('I am a string')
functionWithOneParameter(4)
functionWithOneParameter([1, 2, 3])
functionWithOneParameter(false)

function twoParameterFunction(paramOne, paramTwo) {

    return paramOne + paramTwo
}
twoParameterFunction(10, 5)
twoParameterFunction(100, 201)

function multiplyParameters(paramOne, paramTwo) {
    return paramOne * paramTwo
}
multiplyParameters(10, 6)
multiplyParameters(5, 100)


let count = 0;

function increaseCount() {
    count ++
    console.log(count);
}
increaseCount()
increaseCount()
increaseCount()
increaseCount()


function returnPartOfAnArray(list) {
    return list[2]
}
returnPartOfAnArray([1,2,5,7])
