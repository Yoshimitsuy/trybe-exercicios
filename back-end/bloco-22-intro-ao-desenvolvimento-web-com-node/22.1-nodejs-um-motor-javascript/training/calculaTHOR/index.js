const operations = require('./operecoes')
const readLine = require('readline-sync')

console.log('calculadora : ');

const n1 = readLine.questionInt('Digite um número: ');
const op = readLine.question('Digite a operação: ( +, -, *, / ) ');
const n2 = readLine.questionInt('Digite um número: ');

switch (op) {
    case '+':
        operations.sum(n1, n2)
        break;

    case '-':
        operations.sub(n1, n2)
        break;

    case '*':
        operations.mul(n1, n2)
        break;

    case '/':
        operations.div(n1, n2)
        break;

    default:
        console.log('ta doidão ? que conta maluca é essa ?');
}

