const primeiroFilho = document.querySelector("#primeiroFilho");
let text2 = document.createElement("h2");
text2.id = "text2"
primeiroFilho.appendChild(text2);

const elementoOndeEsta = document.querySelector("#elementoOndeVoceEsta");
let section1 = document.createElement("section");
section1.id = "section1";
elementoOndeEsta.appendChild(section1);

const elementoOndeEsta2 = document.querySelector("#elementoOndeVoceEsta");
let text = document.createElement("h1");
text.innerText = "Vasco da gama"
text.id = "text"
elementoOndeEsta2.appendChild(text);

const thirdSon = document.querySelector("#text2").parentElement.nextElementSibling.nextElementSibling;

console.log(thirdSon);

