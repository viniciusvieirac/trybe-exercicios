const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const verifyAnswers = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
    if (RIGHT_ANSWERS === STUDENT_ANSWERS) {
        return 1.0;
    } 
    if (STUDENT_ANSWERS === 'N.A') {
        return 0
    }
    if (STUDENT_ANSWERS !== RIGHT_ANSWERS) {
        return 0.5
    }
};

const finalNota = (RIGHT_ANSWERS, STUDENT_ANSWERS, count) => {
    let nota = 0;
    for (let index = 0; index < RIGHT_ANSWERS.length; index +=1 ) {
        const initCount = count(RIGHT_ANSWERS[index], STUDENT_ANSWERS[index]);
        nota += initCount;
    }
    return nota; 
}
console.log(finalNota(RIGHT_ANSWERS,STUDENT_ANSWERS, verifyAnswers));