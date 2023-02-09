import validator from 'validator';
import './style.css'

const getInput = document.querySelector('#input-text');
const getOptions = document.querySelector('#options');
const getSubmit = document.querySelector('#validate');
const getResult = document.querySelector('#result');

getSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  const dropdown = {
    cpf: validator.isTaxID(getInput.value, 'pt-BR'),
    creditCard: validator.isCreditCard(getInput.value),
    email: validator.isEmail(getInput.value),
    isCurrency: validator.isCurrency(getInput.value),
    url: validator.isURL(getInput.value),
  };
  getResult.innerHTML = `Seu resultado foi ${dropdown[getOptions.value]}`;
});
