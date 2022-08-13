// libs
const express = require('express');
const Joi = require('joi');
const userModel = require('./models/userModel');
require('express-async-errors');

// joi

const validateBody = (user) =>{
  const schema =  Joi.object({

    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),  
  });
  const { error, value } = schema.validate(user);
  if (error) throw new Error(error.message);

  return value;
}

const validateId = (user) =>{
  const schema =  Joi.object({
    id: Joi.number().integer().required()
  });

  const { error, value } = schema.validate(user);
  if (error) throw new Error(error.message);

  return value;
}

// express application
const app = express();

// bodyParser que nem precisa mais, mas to usando => express
app.use(express.json());

// middlewares

app.get('/', (req, res) => res.send('oOoBaA'));

app.post('/user', async (req, res) =>{
  const { firstName, lastName, email } = req.body;
  const user = validateBody(req.body);
  const idUser = await userModel.create(user);
  res.status(201).json({ id: idUser, firstName, lastName, email });
});

app.get('/user', async (req, res) => {
  const users = await userModel.findAll();

  res.status(200).json(users);
});

app.get('/user/:id', async (req, res) => {
  const { id } = validateId(req.params);
  const user = await userModel.findById(id);

  res.status(200).json(user);
});

app.put('/user/:id', async (req, res) => {
  const { id } = validateId(req.params);
  const user = validateBody(req.body);

  await userModel.checkError(id);
  await userModel.update(id, user);

  res.status(200).json(user);
});

app.delete('/user/:id', async (req, res) => {
  const { id } = validateId(req.params);

  await userModel.checkError(id);
  await userModel.delete(id);

  res.status(200).json({ message : 'User deleted successfully'})
});

app.use((err, req, res, next ) => {
  const { message } = err;

  res.status(404).json({ message });
});

// port
const PORT = 3001;

// start server
app.listen( PORT, () => { console.log(`Yoshimitsuy: active on port ${PORT}`);})



