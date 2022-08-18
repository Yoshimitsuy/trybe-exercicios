// services/Book.js

const Author = require('../models/Author');
const Book = require('../models/Book');

const getAll = async () => Book.getAll();

const findById = async (id) => {
  const book = await Book.getById(id);

  if (!book) {
    return {
      error: {
        code: 'notFound',
        message: 'Livro não encontrado',
      },
    };
  }

  return book;
};

// a função createBook era assim :

// const booksValid = async ( title, authorId ) => {
//   if (!title || typeof title !== 'string' || title.length < 3) return false;
//   if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;

//   return true;
// }

const createBook = async (title, bookId) => {
  const book = await Author.findById(bookId);

  if (!author) { // ???
    return {
      error: {
        code: 'notFound',
        message: 'Autor não encontrado',
      },
    };
  }

  return Book.createBook(title, bookId);
};

module.exports = {
  getAll,
  findById,
  createBook,
};