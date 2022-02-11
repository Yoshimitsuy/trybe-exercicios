/*4 - Crie uma função que use concatenação de strings
Escreva uma função com o nome concatName que, ao receber uma array de strings, 
retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.

Isso quer dizer que, caso o parâmetro passado para concatName 
seja a Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deverá retornar Paolillo, Lucas.

O que será verificado:

Retorne 'Paolillo, Lucas' quando o parâmetro passado na funcão concatName 
seja ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']

Retorne 'ré, foguete' quando o parâmetro passado na funcão concatName 
seja ['foguete', 'não', 'tem', 'ré']

Retorne 'captain, captain' quando o parâmetro passado na funcão concatName 
seja ['captain', 'my', 'captain'] */

function concatName(arrayString) {
    let firstR = arrayString[0];
    let lastR = arrayString[arrayString.length - 1];
    let result = lastR + ", " + firstR;
    return result;
}

console.log(concatName(["foguete", "não", "tem", "ré"]));
