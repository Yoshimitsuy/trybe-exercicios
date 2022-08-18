// const Author = require('./Author');

// task 1.1 - 
const connection = require('./connection');

const getAllBooks = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, book_id FROM model_example.books;'
  );
  return books.map(({ id, title, book_id }) => ({
    id,
    title,
    bookId: book_id,
  }));
};

// task 1.3 - 
const getByAuthorId = async (bookId) => {
  const query = 'SELECT * FROM model_example.books WHERE book_id=?;';

  const [books] = await connection.execute(
    query, [bookId]
  );
  
  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
}

// task 2.1 -

const findBookById = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id=?;';

  const [ book ] = await connection.execute(
    query, [id]
  );
  
  if (book.length === 0) return null;

  return {
    id: book.id,
    title: book.title,
    bookId: book.book_id,
  };
}

// esta função vai ser tratada no BookService

// const booksValid = async ( title, authorId ) => {
//   if (!title || typeof title !== 'string' || title.length < 3) return false;
//   if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;

//   return true;
// }

const createBook = async (title, bookId) => {
  const query = 'INSERT INTO model_example.books (title, book_id) VALUES (?, ?);';

  connection.execute(query, [title, bookId]);

  return ({ id: book.insertId, title, bookId });

};

module.exports = {
  getAllBooks,
  getByAuthorId,
  findBookById,
  createBook,
  // booksValid,
}