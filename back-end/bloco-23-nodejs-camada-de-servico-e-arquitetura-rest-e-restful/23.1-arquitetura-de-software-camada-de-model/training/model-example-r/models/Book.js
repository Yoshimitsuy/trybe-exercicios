const Author = require('./Author');

// task 1.1 - 
const connection = require('./connection');

const getAllBooks = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books;'
  );
  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

// task 1.3 - 
const getByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;';

  const [books] = await connection.execute(
    query, [authorId]
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

  const [ books ] = await connection.execute(
    query, [id]
  );
  
  if (books.length === 0) return null;

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
}

const booksValid = async ( title, authorId ) => {
  if (!title || typeof title !== 'string' || title.length < 3) return false;
  if (!authorId || typeof authorId !== 'number' || !(await Author.findById(authorId))) return false;

  return true;
}

const createBook = async (title, author_id) => {
  const query = 'INSERT INTO model_example.books (title, author_id) VALUES (?, ?);';

  connection.execute(query, [title, author_id]);

};

module.exports = {
  getAllBooks,
  getByAuthorId,
  findBookById,
  createBook,
  booksValid,
}