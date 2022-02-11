/* 2 - Crie uma função que calcule a área do triângulo
Escreva uma função com o nome calcArea que receba um valor de base (chamado base) 
e outro de altura (chamado height) de um triângulo e retorne o cálculo da sua área.

Lembre-se que a área de um triângulo é calculada através da seguinte fórmula: (base * altura) / 2.

O que será verificado:

Retorne o valor 250 quando a funcão calcArea é chamada com o parâmetro base com o valor 10 
e o parâmetro height com o valor 50

Retorne o valor 5 quando a funcão calcArea é chamada com o parâmetro base com o valor 5 
e o parâmetro height com o valor 2 espera-se como resultado 5

Retorne o valor 25.5 quando a funcão calcArea é chamada com o parâmetro base com o valor 51 
e o parâmetro height com o valor 1 espera-se como resultado 25.5 */



function calcArea(base, height) {
    return (base * height) / 2;

}

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));
