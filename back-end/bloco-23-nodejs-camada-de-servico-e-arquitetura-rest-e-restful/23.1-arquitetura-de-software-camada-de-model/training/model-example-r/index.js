// index.js

const bodyParser = require('body-parser');
const { json } = require('express');
const express = require('express');

const Author = require('./models/Author');
const Book = require('./models/Book')

const app = express();

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

// task 1.2 - 
// app.get('/books', async (req, res) => {
//   const books = await Book.getAllBooks();

//   return res.status(200).json(books);
// });

app.get('/books', async (req, res) => {
  const { author_id } = req.query;
   
  const books = (author_id)
   ? await Book.getByAuthorId(author_id)
   : await Book.getAllBooks();

  res.status(200).json(books);
});

// app.get('/books/:id', async (req, res) => {
  
//   const books = await Book.getByAuthorId();

//   res.status(200).json(books);
// });

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: 'Not found' });

  // console.log(author);

  res.status(200).json(author);
});

// task 2.1

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;

  const books = await Book.findBookById(id);

  if (!books) return res.status(404).json({ message : 'Book not found'});

  res.status(200).json(books);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message : 'Invalid data'});
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message : 'Author created' });
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;

  if (!await Book.booksValid(title, author_id)) {
    return res.status(400).json({ message : 'Invalid data'});
  }

  await Book.createBook(title, author_id);

  res.status(200).json({ message : 'Book created' });
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});
