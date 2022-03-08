const sum = require('./01-sum.js');

describe('função sum teste', () => {
  it('retorna a soma', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
  });
  it('mostra erro se o valor não for um número', () => {
    expect(() => sum(4, 'r')).toThrowError('parameters must be numbers');
    });
})  

