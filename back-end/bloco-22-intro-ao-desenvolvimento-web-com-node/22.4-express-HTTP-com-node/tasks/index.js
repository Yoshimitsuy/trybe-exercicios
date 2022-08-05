const express = require('express');
const bodyparser = require('body-parser');
const { getSimpsons, addSimpson, auth, generateToken } = require('./utility');

const app = express();

app.use(bodyparser.json());
app.use(auth);

// aqui a implementação \/

// 1 -

app.get('/ping', (req, res) => {
  res.json({message: 'pong'});
});

// 2 -

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({message: `Hello, ${name}!`,}); //res.json({message: '') -> funciona também
});

// 3 -

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (age <= 17) return res.status(401).json({message: 'some daqui, menor',});

  return res.status(200).json({message: `Você já tem idade. Pode chegar, ${ name }`})
});

// 4 -

app.put('/users/:name/:age', (req, res) => {  // só funcionou via URL direto
  const { name, age } = req.params;
  return res.status(200).json({ message: `Seu nome é ${ name } e você tem ${ age } anos` });
});

// 6 -

app.get('/simpsons', (req, res) => {
  try {
    const simpsons = getSimpsons();
    return res.status(200).json(simpsons);
  } catch (e) {
      return res.status(500).end();
  }
});

// 7 -

app.get('/simpsons/:id', (req, res) => {
  const simpsons = getSimpsons();
  const { id } = req.params;
  
  const oneSimpson = simpsons.find((simp) => id === simp.id);

  if (!oneSimpson) {
    return res.status(404).json({ message: 'simpson not found' });
  }

  return res.status(200).json(oneSimpson);
});

// 8 -

app.post('/simpsons', (req, res) => {
  try {
    const { id, name } = req.body;

    const simpsons = getSimpsons();

  const mapSimpsons = simpsons.find((simp) => simp.id === id);
    console.log(mapSimpsons);
  if (mapSimpsons) {
    return res.status(409).json({ message: 'id already exists' });
  }
  simpsons.push({ id, name });

  addSimpson(simpsons);
  return res.status(204).end();
  } catch (e) {
    return res.status(500).send(e);
  };
});

// bonus 2

app.post('/signup', (req, res) => {
  try {
    const { email, password, firstName, phone } = req.body;
  
    if ([email, password, firstName, phone].includes(undefined)) {
      return res.status(401).json({message: 'missing fields'});
    }

    const token = generateToken();

    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).end();
  }
});

app.listen(3000, () => console.log('porta 3000 ativa'));