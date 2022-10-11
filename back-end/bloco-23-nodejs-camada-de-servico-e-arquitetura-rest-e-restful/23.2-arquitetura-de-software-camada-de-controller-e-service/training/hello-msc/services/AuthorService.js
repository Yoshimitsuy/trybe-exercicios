// services/Authors.js

const Author = require('../models/Author');

const getAll = async () => Author.getAll();

// const findById = async (id) => Author.findById(id);

const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) {
    return {
      error: {
        code: 'notFound',
        message: `Não foi possível encontrar uma pessoa autora com o id ${id}`,
      },
    };
  }

  return author;
};

// const createAuthor = async (firstName, middleName, lastName) =>
//   Author.createAuthor(firstName, middleName, lastName);

const createAuthor = async (firstName, middleName, lastName) => {
  const existingAuthor = await Author.findByName(firstName, middleName, lastName);

  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Uma pessoa autora já existe com esse nome completo',
      },
    };
  }

  // Caso a pessoa autora não exista e, portanto, possa ser criado
  return Author.createAuthor(firstName, middleName, lastName);
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};


// // services/Authors.js

// const Author = require('../models/AuthorModel');

// const getNewAuthor = (authorData) => {
//   const { id, firstName, middleName, lastName } = authorData;

//   const fullName = [firstName, middleName, lastName]
//     .filter((name) => name)
//     .join(' ');

//   return {
//     id,
//     firstName,
//     middleName,
//     lastName,
//     name: fullName,
//   };
// };

// const isValid = (firstName, middleName, lastName) => {
//   if (!firstName || typeof firstName !== 'string') return false;
//   if (!lastName || typeof lastName !== 'string') return false;
//   if (middleName && typeof middleName !== 'string') return false;

//   return true;
// };

// const getAll = async () => {
//   const authors = await Author.getAll();

//   return authors.map(getNewAuthor);
// };

// const findById = async (id) => {
//   const author = await Author.findById(id);

//   if (!author) return null;

//   return getNewAuthor(author);
// };

// // a função createAuthor agora vem pra cá

// const createAuthor = async (firstName, middleName, lastName) => {
//   const validAuthor = isValid(firstName, middleName, lastName);

//   if (!validAuthor) return false;

//   const [author] = await Author.createAuthor(firstName, middleName, lastName);

//   return getNewAuthor({
//     id: author.id,
//     firstName,
//     middleName,
//     lastName,
//   });
// };

// module.exports = {
//   getAll,
//   findById,
//   createAuthor,
// };