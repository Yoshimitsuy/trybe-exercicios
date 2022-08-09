// models/Author.js

const connection = require('./connection');

// Cria uma string com o nome completo do autor
const getNewAuthor = ({ id, firstName, middleName, lastName}) => {
  const fullName = [ firstName, middleName, lastName]
    .filter(Boolean)
    .join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => ({
	id: authorData.id,
	firstName: authorData.first_name,
	middleName: authorData.middle_name,
	lastName: authorData.last_name });

// Busca todas as pessoas autoras do banco.

const getAll = async () => {
	const [authors] = await connection.execute(
		'SELECT id, first_name, middle_name, last_name FROM model_example.authors;',
	);
	// return authors;
  // return authors.map(serialize);
  return authors.map(serialize).map(getNewAuthor);
};

module.exports = {
	getAll,
};
