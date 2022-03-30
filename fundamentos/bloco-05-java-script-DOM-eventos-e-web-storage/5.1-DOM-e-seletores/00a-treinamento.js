// primera parte

const pageTitle = document.getElementById('page-title');
pageTitle.innerText = '<b> title alterado </b>'; // innerText não altera tags
// pageTitle.innerText = 'title alterado';

const secondPee = document.getElementById('second-paragraph');
secondPee.innerHTML = '<b> Capitão Teemo no Comando </b>';

const subtitle = document.getElementById('subtitle');
subtitle.innerText = 'to voltando aqui depois de ter terminado o bloco 9'

const pee = document.getElementById('paragraph');
pee.style.color = 'red';

// segunda parte -> incluí classes no HTML
const doisPee = document.getElementsByClassName('parag');
doisPee[0].style.fontSize = '30px';
doisPee[1].style.color = 'green';

const subtitleByTag = document.getElementsByTagName('h4')[0]; // O ...tagName tem que ser tratado como lista. por isso o [0].
subtitleByTag.style.color = 'violet';
