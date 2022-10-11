

// Variáveis de ambiente
require('dotenv').config();
const express = require('express');

const bodyParser = require('body-parser');
const Cep = require('./controllers/cepController');
const errorMiddleware = require('./middlewares/error.js');

// Express
const app = express();

app.use(express.json());

// Registramos o endpoint `GET /ping`
app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.get('/cep/:cep', Cep.findAddressByCep);

app.use(errorMiddleware);

// Lemos a porta da variável de ambiente, ou usamos 3000
const PORT = process.env.PORT || 3000;

// Iniciamos a aplicação ouvindo na porta informada na variável de ambiente.
app.listen(PORT, () => { console.log(`Yoshimitsuy Online on port ${PORT}`); });