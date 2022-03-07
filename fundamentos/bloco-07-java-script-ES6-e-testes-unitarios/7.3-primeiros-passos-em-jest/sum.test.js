const sum = require('./sum.js');

test('somando 4 + 5 tem que ser igual a 9', () => {
  expect(sum(4, 5)).toBe(9);
});