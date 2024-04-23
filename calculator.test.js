const calculator = require("./calculator");

test('Somar um mais um e igual a dois', () => {
    expect(calculator.somar(1, 1)).toBe(2);
  });

  test('Subtrair quatro menos dois e igual a dois', () => {
    expect(calculator.subtrair(4, 2)).toBe(2);
  });

  test('Multiplicar dois com um e igual a dois', () => {
    expect(calculator.multiplicar(2, 1)).toBe(2);
  });

  test('Dividir quatro com dois e igual a dois', () => {
    expect(calculator.dividir(4, 2)).toBe(2);
  });

