const readLine = require('readline-sync');

function calcImc(peso, altura) {
    console.log(`Peso: ${peso} kg - Altura: ${altura} cm`);

    const mAltura = altura / 100;
    const sqrAltura = mAltura ** 2;

    const imc = ( peso / sqrAltura );

    return imc;
}

const IMC_MAX_MIX = {
  'Abaixo do peso' : {
      imcMin: 0,
      imcMax: 18.4,
  },
  'Peso normal (gostosinho)' : {
      imcMin: 18.5,
      imcMax: 24.9,
  },
  'Acima do peso' : {
      imcMin: 25,
      imcMax: 29.9,
  },
  'Obesidade Grau I' : {
      imcMin: 30,
      imcMax: 34.9,
  },
  'Obeidade Grau II' : {
      imcMin: 35,
      imcMax: 39.9,
  },
  'Obesidade Grave' : {
      imcMin: 40,
      imcMax: 100,
  }
}

function calcSituation(imc) {
  const situations = Object.keys(IMC_MAX_MIX);

  const findSituation = situations.find((situ) => {
    const { imcMax, imcMin } = IMC_MAX_MIX[situ];

    return imc >= imcMin && imc <= imcMax;
  });
  
  return findSituation;
}

function main() {

  const peso = readLine.questionFloat('Quantos quilos você pesa ? ');
  const altura = readLine.questionInt('Qual é a sua altura(cm) ? ');

  const imc = calcImc(peso, altura);

    const situation = calcSituation(imc);

    // mudei a forma com esses ifs por esta com o objeto de situações
    
    // if(imc < 18.5) {
    //   console.log('Situação : Abaixo do peso (magrelo)');
    // }

    // if(imc < 18.5) {
    //   console.log('Situação : Abaixo do peso (magrelo)');
    // }

    // if(imc >= 18.5 && imc < 25) {
    //   console.log('Situação : Peso normal)');
    // }

    // if(imc >= 25 && imc < 30) {
    //   console.log('Situação : Acima do peso (sobrepeso))');
    // }

    // if(imc >= 30 && imc < 35) {
    //   console.log('Situação : Obesidade grau 1');
    // }

    // if(imc >= 35 && imc < 40) {
    //   console.log('Situação : Obesidade grau 2');
    // }

    // if(imc >= 40) {
    //   console.log('Situação : Obesidade grave');
    // }

    console.log(`Situação : ${situation}`);
}

main();
