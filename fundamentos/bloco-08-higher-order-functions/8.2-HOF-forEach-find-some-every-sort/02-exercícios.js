const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// Retorne o nome do livro de menor nome.

function smallerName(books) {
  // Namebook, segura isso aqui:
  let nameBook = books[0].name;

  // Olhando todas as caixinhas, uma por vez:
  books.forEach(livro => {
    // Se a caixinha da vez tiver o nome MENOR que o que o nameBook tá segurando:
    if (livro.name.length < nameBook.length) {
      // O nameBook vai segurar a menor e vai jogar o antigo fora:
      nameBook = livro.name;
    }
  });

  // Se eu rodei o array todinho, fazendo o namebook largar o maior e segurar
  // apenas o menor de cada comparação:
  return nameBook;
  console.log(smallerName);
  // Retornar o menor nome;
}