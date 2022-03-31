// PARTE 1

// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
const makeH1 = document.createElement('h1');
makeH1.innerText = 'Exercício 5.2 - JS DOM';
document.body.appendChild(makeH1);

// 2. Adicione a tag main com a classe main-content como filho da tag body ;
const makeMain = document.createElement('main');
makeMain.className = 'main-content';
makeMain.innerText = 'só pra vizualizar a tag MAIN';
document.body.appendChild(makeMain);

// 3. Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const makeSection = document.createElement('section');
makeSection.className = 'center-content'
makeSection.innerHTML = 'aqui é a section';
makeMain.appendChild(makeSection);

// 4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const pee = document.createElement('p');
pee.innerText = 'aqui é o parágrafo';
makeSection.appendChild(pee);

// 5. Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const leftSide = document.createElement('section');
leftSide.className = 'left-content';
leftSide.innerText = 'lado esquerdo';
makeMain.appendChild(leftSide);

// 6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const rightSide = document.createElement('section');
rightSide.className = 'right-content';
rightSide.innerText = 'lado direito';
makeMain.appendChild(rightSide);

// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 
// e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
const image = document.createElement('img');
image.className = 'small-image';
image.src = 'https://picsum.photos/200 ';
leftSide.appendChild(image);

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, 
// ou seja, um , dois , três , ... como valores da lista. 
//Essa lista deve ser filha do section criado no passo 6;
const UnList = document.createElement('ul');
const arrayNumbers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

for (let i in arrayNumbers) {
  const list = document.createElement('li');
  UnList.appendChild(list);
  list.innerHTML = arrayNumbers[i];
  rightSide.appendChild(UnList);
};

// 9. Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
for ( let i = 0; i < 3; i += 1 ) {
  const makeH3 = document.createElement('h3');
  makeMain.appendChild(makeH3);
  makeH3.innerText = 'os h3 aqui';
};  

// PARTE 2

// 1. Adicione a classe title na tag h1 criada;


// 2. Adicione a classe description nas 3 tags h3 criadas;
// 3. Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
// 4. Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
// 5. Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
// 6. Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.