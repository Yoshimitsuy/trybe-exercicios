/* 6 - Crie uma função que calcule a repetição do maior número
Escreva uma função chamada highestCount que, ao receber uma array de números, 
retorne a quantidade de vezes que o maior deles se repete.

Exemplo: caso o parâmetro de highestCount seja uma array com valores [9, 1, 2, 3, 9, 5, 7], 
a função deverá retornar 2, que é a quantidade de vezes que o número 9 (maior número do array) 
se repete.

O que será verificado:

Retorne 2 quando o parâmetro passado na funcão highestCount seja [9, 1, 2, 3, 9, 5, 7]

Retorne 1 quando o parâmetro passado na funcão highestCount seja [0, 4, 4, 4, 9, 2, 1]

Retorne 3 quando o parâmetro passado na funcão highestCount seja [0, 0, 0] */

function highestCount(arrayNumbers) {
    let number = arrayNumbers[0];
    for (let n = 0; n <= arrayNumbers.length; n += 1) {
        if (arrayNumbers[n] > number) {
            number = arrayNumbers[n];
        }
    }
    // return number;

    let amount = 0;
    for (let r = 0; r <= arrayNumbers.length; r += 1) {
        if (arrayNumbers[r] === number) {
            amount += 1;
        }

    }
    return amount;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7,]));
