/* 3 - Crie uma função que divida a frase
Escreva uma função com o nome splitSentence, a qual receberá uma string 
e retornará uma array de strings separadas por cada espaço na string original.

Exemplo: se a função receber a string "go Trybe", o retorno deverá ser ['go', 'Trybe'].

O que será verificado:

Retorne o valor ['go', 'Trybe'] se a função receber a string 'go Trybe'

Retorne o valor ['vamo', 'que', 'vamo']. se a função receber a string 'vamo que vamo'

Retorne o valor ['foguete'] se a função receber a string 'foguete'*/


function splitSentence(txt) {
    return txt.split(" ");

}




console.log(splitSentence("go Trybe"));
console.log(splitSentence("vamo que vamo"));
console.log(splitSentence("foguete"));
