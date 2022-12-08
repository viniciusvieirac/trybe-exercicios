const firstTagT = document.createElement("h1");
firstTagT.innerText = "TrybeTrip - Agência de Viagens";
document.body.appendChild(firstTagT);

const tagMain = document.createElement("main");
tagMain.className = "main-content";
document.body.appendChild(tagMain);

const section1 = document.createElement("section");
section1.className = "center-content";
section1.style.backgroundColor = 'green'
tagMain.appendChild(section1);

const firstP = document.createElement("p");
firstP.innerText = "Vasco da gama"
section1.appendChild(firstP);

const section2 = document.createElement("section");
section2.className = "left-content";
tagMain.appendChild(section2);

const section3 = document.createElement("section");
section3.className = "right-content";
tagMain.appendChild(section3);

const imageS = document.createElement("img");
imageS.src = "https://picsum.photos/200 "
imageS.className = "small-image"
section2.appendChild(imageS);

const listaSOrdem = document.createElement("ul");
section3.appendChild(listaSOrdem);
const array = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis',
        'Sete', 'Oito', 'Nove', 'Dez'];
        for (index = 0; index < array.length; index += 1){
            const itens = document.createElement("li");
            itens.innerText = array[index];
            section3.appendChild(itens);
        };
for (let index = 0; index <=3; index +=1 ){
    const criaH3 = document.createElement("h3");
    criaH3.innerHTML = index;
    tagMain.appendChild(criaH3)
}

      const title = document.querySelector('h1');
      title.className = 'title';

      const criaH3 = document.getElementsByTagName('h3');
      for (let index = 0; index <= 3; index += 1) {
        criaH3[index].className = 'description';
      }

const removeSection = document.getElementsByClassName("left-content")[0];
tagMain.removeChild(section2);

const changeMargin = document.getElementsByClassName("right-content")[0];
changeMargin.style.marginRight = 'auto';

const changeColor = document.getElementsByClassName("center-content")[0];
changeColor.parentNode.style.backgroundColor = 'green'

const removeUl = document.getElementsByClassName("ul")[0];
removeUl.lastChild.remove();
removeUl.lastChild.remove();





