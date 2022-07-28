const readLine = require('readline-sync');

const scripts = [
  { name: 'Calcule o IMC', path: './imc.js' },
  { name: 'Calcular a velocidade média', path: './velocidade.js' },
  { name: 'Jogo de Adivinhação', path: './sorteio.js' },
  { name: 'Calcular Fatorial', path: './fatorial.js' },
];

function escolher() {
  const escolha = 'Escolha um número para executar o script correspondente \n'
  const mensagem = scripts.reduce((msg, script, i) =>  
    `${msg}${i + 1} - ${script.name}\n`, escolha );

  const numeroEscolhido = readLine.questionInt(mensagem) - 1;

  const script = scripts[numeroEscolhido];

  return script;
}

function main() {
  const script = escolher();

  if (!script) return console.log('Número inválido. Bye !');

  require(script.path);

}

main();