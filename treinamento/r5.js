/* 5 - Crie uma função que calcule a quantidade de pontos no futebol
Escreva uma função com o nome footballPoints que receba o número de vitórias 
(esse parâmetro deverá se chamar wins) e o número de empates (esse parâmetro deverá se chamar ties) 
e retorne a quantidade de pontos que o time marcou em um campeonato.

Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.

O que será verificado:

Retorne 50 pontos quando o time tenha 14 vitórias e 8 empates

Retorne 5 pontos quando o time tenha 1 vitória e 2 empates

Retorne 0 pontos quando o time tenha 0 vitórias e 0 empates */

function footballPoints(wins, ties) {
  let result = (wins * 3) + (ties * 1);
  return result;

}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0)); 
