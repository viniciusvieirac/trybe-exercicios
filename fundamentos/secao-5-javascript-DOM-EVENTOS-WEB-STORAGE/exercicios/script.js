function alteraTexto (texto){
    document.getElementsByTagName("p")[1].innerText = texto
} console.log(alteraTexto('Espero daqui a 2 anos estar empregado'));

function alteraCorMain (elemento) {
  document.querySelector(elemento).style.backgroundColor = 'blue'
} alteraCorMain('.main-content', 'blue');

function alteraCorMain2 (elemento2) {
    document.querySelector(elemento2).style.backgroundColor = 'white'
  } alteraCorMain2('.main-content .center-content ', 'white');
  
  function alteraH1(text){
    document.getElementsByTagName("h1")[0].innerText = text
} alteraH1('Desafio - JavaScript');

function alteraP1 (p1){
    document.getElementsByTagName("p")[0].innerText = p1
} alteraP1('TEXTO PADRÃO DO NOSSO SITE');

function exibeP (param){
   let exibe = document.getElementsByTagName("p")
   for (index = 0; index < exibe.length; index +=1 ){
    console.log(exibe[index].innerHTML);
   }
}exibeP();

