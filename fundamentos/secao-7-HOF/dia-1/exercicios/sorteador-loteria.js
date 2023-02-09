const numberExact = (number, myNumber) => myNumber === number;

const numberGenerator = (myNumber, numberExact) => {
    const number = Math.floor((Math.random() * 10) + 0); 
    return numberExact(myNumber, number) ? 'Parabéns, você ganhou' : 'Tente de novo';
}

console.log(numberGenerator(5, numberExact));