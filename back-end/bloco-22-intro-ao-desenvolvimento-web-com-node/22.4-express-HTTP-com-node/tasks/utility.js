const fs = require('fs');
const crypto = require('crypto');

function getSimpsons() {
  const readFile = fs.readFileSync('./simpsons.json', 'utf-8')
  const data = JSON.parse(readFile);

  return data;
}

function addSimpson(newSimp) {
  return fs.writeFileSync('./simpsons.json', JSON.stringify(newSimp));
}


function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

function auth (req, res, next) {

  try {
    const { authorization } = req.headers;
  
    if (!authorization || authorization.length !== 16) {
      return res.status(401).json({ message: 'Invalid Token'});
    }
    next()
  } catch (e) {
    return res(500).end();
  }
  
}

module.exports = {
  getSimpsons,
  addSimpson,
  generateToken,
  auth
}