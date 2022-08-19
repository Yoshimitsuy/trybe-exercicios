const conec  = require('./connection');

const regex =  /^\d{5}-?\d{3}$/;

const formatCep = (cep) => {
 if (regex.test(cep)) return cep;

 return cep.replace( /^\d{5}-?\d{3}$/, '$1-$2');
};

const getNewCep = ({ cep, logradouro, bairro, localidade, uf }) => ({
  cep: formatCep(cep),
  logradouro,
  bairro,
  localidade,
  uf,
});

const findAdressByCep = async (findCep) => {
  const cepCheck = findCep.replace('-', '');

  const sql = 'SELECT cep, logradouro,, bairro, localidade, uf FROM ceps WHERE cep = ?;';

  const data = await conec.execute(sql, [cepCheck])
    .then(([data]) => (data.lenght ? data[0] : null));

  if (!data) return null;
};

module.exports = {
  findAdressByCep,
}
