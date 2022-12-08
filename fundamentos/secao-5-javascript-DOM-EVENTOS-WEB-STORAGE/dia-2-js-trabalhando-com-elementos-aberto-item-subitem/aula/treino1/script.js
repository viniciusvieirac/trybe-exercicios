    // Acesse o elemento elementoOndeVoceEsta.
    const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

    // Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
    const pai = elementoOndeVoceEsta.parentElement;
    pai.style.color = 'red';

    // Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
    // Você se lembra dos vídeos da aula anterior, como fazer isso?
    const primeiroFilhoDoFilho = elementoOndeVoceEsta.firstElementChild;
    primeiroFilhoDoFilho.innerText = 'primeiroFilhoDoFilho';

    // Acesse o primeiroFilho a partir de pai.
    const primeiroFilho = pai.firstElementChild;

    // Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
    const primeiroFilho2 = elementoOndeVoceEsta.previousElementSibling;
    
    // Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
    const textElement = elementoOndeVoceEsta.nextSibling;

    // Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
    const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

    // Agora acesse o terceiroFilho a partir de pai.
    const terceiroFilho2 = pai.lastElementChild.previousElementSibling;
