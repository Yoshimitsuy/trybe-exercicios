const readLine = require('readline-sync');

function results(n, result) {
   if (n !== result) {
    return console.log(`Errou !! O número era ${n}`);
}

  return console.log(`Aeeeeeee, acertou !`);
}

function main() {
  const n = parseInt(Math.random() * 10, 10);

  const result = readLine.questionInt(
    'Digite um número entre 0 e 10 para saber se é o número que estou pensando : ',
  );

  results(n, result);

  const again = readLine.question(
    'Deseja jogar novamente ? (Digite s (sim) e qualquer coisa (não) ',
  );

  if (again !== 's') return console.log('OK, até a próxima !');

  main();

} 

main();

