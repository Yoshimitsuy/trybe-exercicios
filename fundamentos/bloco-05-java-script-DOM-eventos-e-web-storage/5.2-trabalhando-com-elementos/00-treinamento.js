// PARTE 1
// 1. Acesse o elemento elementoOndeVoceEsta .
const one = document.getElementById('elementoOndeVoceEsta');

// 2. Acesse pai a partir de elementoOndeVoceEsta 
// e adicione uma color a ele.
const returnPai = one.parentNode;
returnPai.style.color = 'green';

// 3. Acesse o primeiroFilhoDoFilho 
// e adicione um texto a ele. 
// Você se lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFdoF = document.getElementById('primeiroFilhoDoFilho');
primeiroFdoF.innerText = 'essas ids confundem demais slc';

// 4. Acesse o primeiroFilho a partir de pai .
const GrandFather = document.getElementById('pai').parentNode;

// 5. Agora acesse o primeiroFilho 
// a partir de elementoOndeVoceEsta.
const five = one.previousElementSibling;

// 6. Agora acesse o texto Atenção! 
// a partir de elementoOndeVoceEsta.
const six = one.nextSibling;

// 7. Agora acesse o terceiroFilho
// a partir de elementoOndeVoceEsta.
const seven = one.nextElementSibling;

// 8. Agora acesse o terceiroFilho 
// a partir de pai.
const father = document.getElementById('pai');
father.lastElementChild.previousElementSibling;


// PARTE 2
// 1. Crie um irmão para elementoOndeVoceEsta.
const brotherA = document.createElement('section');
father.appendChild(brotherA);
brotherA.innerHTML = 'irmão para o elementoOndeVoceEstá';
brotherA.id = 'filhoBrotherzada';

// 2. Crie um filho para elementoOndeVoceEsta.
const sonElement = document.createElement('p');
one.appendChild(sonElement).innerHTML = 'filho do elemento';
sonElement.id = 'parag-filho';

// 3. Crie um filho para primeiroFilhoDoFilho.
const FirstBaby = document.createElement('p');
primeiroFdoF.appendChild(FirstBaby).innerHTML = 'mais um filho, RECEBA !';
FirstBaby.id = 'filhazada';

// 4. A partir desse filho criado, acesse terceiroFilho.
const acessTrhird = FirstBaby.parentNode.parentNode;
acessTrhird.nextSibling;


// PARTE 3
// Remova todos os elementos filhos de paiDoPai exceto pai, 
// elementoOndeVoceEsta e primeiroFilhoDoFilho.

// const firstSon = document.getElementById('primeiroFilho');
// firstSon.remove(); --> tinha feito essa merda antes do for


const king = document.getElementById('pai');

  for (i = king.children.length -1; i >= 0; i -= 1) {
    let cleanElement = king.children[i];
    if(cleanElement.id !== 'elementoOndeVoceEsta') {
      console.log(i);
      cleanElement.remove();
    };  
  }; 
  
const secondChild = document.getElementById('segundoEUltimoFilhoDoFilho');
secondChild.remove();

const paragChild = document.getElementById('parag-filho');
paragChild.remove();


