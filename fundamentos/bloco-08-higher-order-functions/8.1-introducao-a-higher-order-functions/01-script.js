const newEmployees = (nomeEmail) => {
  const employees = {
    id1: nomeEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: nomeEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: nomeEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// 1. crie uma função
// 2. essa função vai retornar um objeto { nomeCompleto, email }
// 3. passar função como parametro da newEmployees
// 4. parametros da minha função são : nome completo 
// 5. o retorno dela deve ser gerar um email : nome_da_pessoa@trybe.com
// 6. transformar a palavra toda para letras minúsculas

function nomeEmail(nome) {
  const emailUnderline = nome.toLowerCase().replace(/ /g,"_");
  // const mini = nome.toLowerCase();
  // console.log('email:', emailUnderline);
  return { nome, email: `${emailUnderline}@trybe.com` };

}

console.log(newEmployees(nomeEmail));