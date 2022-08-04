const fs = require('fs');

function getSimpsons() {
  const readFile = fs.readFileSync('./simpsons.json', 'utf-8')
  const data = JSON.parse(readFile);

  return data;
}

function addSimpson(newSimp) {
  return fs.writeFileSync('./simpsons.json', JSON.stringify(newSimp));
}

module.exports = {
  getSimpsons,
  addSimpson
}