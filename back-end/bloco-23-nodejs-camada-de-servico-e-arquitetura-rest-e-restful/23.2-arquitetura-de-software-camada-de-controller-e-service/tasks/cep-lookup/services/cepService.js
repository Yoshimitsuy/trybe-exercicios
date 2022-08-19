const cepModel = require('../models/cepModel');

const regex =  /^\d{5}-?\d{3}$/; // nem precisa estar aqui esse regex

const findAdressByCep = async (findCep) => {
  if (!regex.test(findCep)) {
    return {
      error: {
        code: 'invalid data',
        message: "CEP inválido"
      }
    }
  }

  const cep = await cepModel.findAdressByCep(findCep);

  if (!cep) {
    return {
      error: {
        code: 'not found',
        message: 'CEP não encontrado'
      }
    }
  }

  return cep;
};

module.exports = {
  findAdressByCep,
};
