import Swal from 'sweetalert2';
import './style.css'

const ACCESS_TOKEN = '1806273503106610';
const BASE_URL = `https://www.superheroapi.com/api.php/${ACCESS_TOKEN}`;

const image = document.querySelector('#image');
const names = document.querySelector('#name');
const button = document.querySelector('#button');

const HEROES = 1000;

const randomHeroes = () => Math.floor(Math.random() * HEROES)

button.addEventListener('click', (event) => {
    event.preventDefault()
    const id = randomHeroes();
    fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((data) => {
        image.src = data.image.url;
        names.innerHTML = data.name;
    }).catch((error) => Swal.fire({
        title: 'Hero not Found',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Cool',
    }))
})
