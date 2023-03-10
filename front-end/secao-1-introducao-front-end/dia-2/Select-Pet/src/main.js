import './style.css'

const buttonDog = document.querySelector('#button-dog');
const buttonCat = document.querySelector('#button-cat');
const buttonSurprise = document.querySelector('#button-surprise');
const img = document.querySelector('#random-pet');



buttonDog.addEventListener('click', (event) => {
    event.preventDefault();

    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
        img.src = data.message;
    })
});
buttonCat.addEventListener('click', (event) => {
    event.preventDefault();

    fetch('https://aws.random.cat/meow')
    .then((res) => res.json())
    .then((data) => {
        img.src = data.file;
    })
});

buttonSurprise.addEventListener('click', (event) => {
    event.preventDefault();

    const race1 = fetch('https://aws.random.cat/meow')
    .then((res) => res.json())
    .then((data) => {
        img.src = data.file;
    })
    const race2 = fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
        img.src = data.message;
    })
    Promise.race([race1, race2]).then((value) => {
        value
    })
});

