// vm = vs / t

const readLine = require('readline-sync');

function calcVM(d, t) {
    console.log(`Distância(m) : ${d} - Tempo(s) : ${t}`);

    // const tempoEmHora = t * 3600 - desisti de brincar
    const vm = d / t;

    return vm;
}

function main() {
    const distancia = readLine.questionInt('Qual a distância(m) ? ');
    const tempo = readLine.questionInt('Quanto tempo(s) ? ');

    const vm = calcVM(distancia, tempo);

    console.log(`Velocidade Média : ${vm.toFixed(2)} que é igual a ${vm.toFixed(2) * (3,6)} km/h`);
}

main();