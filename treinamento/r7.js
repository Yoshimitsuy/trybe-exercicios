/* 7 - Crie uma função de Caça ao rato
Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, 
e que ambos estão atrás de um rato chamado mouse. 
Imagine que cada um dos três animais está em uma posição representada por um número.

Sabendo disso, crie uma função chamada catAndMouse que, ao receber a posição de mouse, 
cat1 e cat2, nessa ordem, calcule as distâncias entre o rato e os gatos e 
retorne qual dos felinos irá alcançar o rato primeiro (sendo aquele que estará mais perto).

Exemplo: caso o gato cat2 esteja a 2 unidades de distância do rato, 
e cat1 esteja a 3 unidades, sua função deverá retornar "cat2".

Caso os gatos estejam na mesma distância do rato, a função 
deverá retornar a string "os gatos trombam e o rato foge".

O que será verificado:

Retorne a string 'cat2' caso a função catAndMouse receba o parâmetros 
onde gato cat2 esteja a 2 unidades de distância do rato e cat1 esteja 
a 3 unidades de distância do rato

Retorne a string 'cat1' caso a função catAndMouse receba o parâmetros 
onde gato cat1 esteja a 6 unidades de distância do rato e cat2 esteja 
a 12 unidades de distância do rato

Retorne a string 'os gatos trombam e o rato foge' caso a função catAndMouse receba o parâmetros 
onde gatos estejam na mesma distância do rato

*/

//let mouse = 1;
//let cat1 = 7;
//let cat2 = 9;

function catAndMouse(mouse, cat1, cat2) {
  if ((cat1 - mouse) > (cat2 - mouse)) {
    return "cat2";

  } else if ((cat2 - mouse) > (cat1 - mouse)) {
    return "cat1";

  } else {
    return "os gatos se trombam e o rato foge";
  }
}

console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(0, 6, 12));
console.log(catAndMouse(0, 7, 7));
