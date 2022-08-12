// models/Author.js

const { query } = require('./connection');
const connection = require('./connection');

// Cria uma string com o nome completo do autor
const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
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

const findById = async (id) => {
  const query = 'SELECT first_name, middle_name, last_name FROM model_example.authors WHERE id = ?;';
  const [ authorData ] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;
  // console.log('log do author data', authorData);

  const { firstName, middleName, lastName } = authorData.map(serialize)[0];

  return getNewAuthor({
    id, firstName, middleName, lastName
  })
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
}

const create = async (firstName, middleName, lastName) => {
  const query = 'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?);';

  connection.execute(query, [firstName, middleName, lastName]);
}

module.exports = {
	getAll,
  findById,
  isValid,
  create,
};
