const station = require("./station");

test('a divisao entre a distancia e o consumo por litro e:', () => {
    expect(station.calcGas( 10, "gasolina")).toBe(1.6);
});

test('a divisao entre a distancia e o consumo por litro e:', () => {
    expect(station.calcEtanol( 10, "etanol")).toBe(1.1);
});

