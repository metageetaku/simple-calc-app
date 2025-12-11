const Calculator = require('../src/calculator');

describe('Calculator', () => {
  let calc;

  beforeEach(() => {
    calc = new Calculator();
  });

  test('addition de deux nombres', () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test('soustraction de deux nombres', () => {
    expect(calc.subtract(5, 3)).toBe(2);
  });

  test('multiplication de deux nombres', () => {
    expect(calc.multiply(4, 3)).toBe(12);
  });

  test('division de deux nombres', () => {
    expect(calc.divide(10, 2)).toBe(5);
  });

  test('division par zéro lève une erreur', () => {
    expect(() => calc.divide(10, 0)).toThrow('Division by zero');
  });
});
