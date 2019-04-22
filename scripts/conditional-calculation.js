function scoreAnswers(answerOne, answerTwo, answerThree) {
    answerOne = answerOne.toLowerCase();
    answerTwo = answerTwo.toLowerCase();
    answerThree = answerThree.toLowerCase();
    
    let score = 0;

    if(answerOne === 'kitten' || answerOne === 'cat') {
        score += 1
    }

    if(answerTwo === 'pizza') {
        score += 1
    }

    if(answerThree !== 'taco') {
        score += 1
    }

    return score;
}