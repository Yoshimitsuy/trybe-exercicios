const readLine = require('readline-sync');

function fatoras(r) {

  let fatorial = r;

  const oneMult = r - 1;

  for (let i = oneMult; i > 0; i -= 1) {
    fatorial *= i;
  }
  return fatorial;
}

function main() {
  const r = readLine.questionInt('Informe o valor de r : ');

  if ( r <= 0 ) {

    console.log('Digite um número maior que 0 ');
    return;
    
  }

  console.log(`r : ${r}`);
  const result = fatoras(r);
  console.log(`Resultado : ${result}`);

}

main();