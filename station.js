
let litros

function calcGas(distance, type) {

    if (type === "gasolina") {
        type = 16 
    }

    litros = type / distance;
    return litros;
}

function calcEtanol(distance, type) {

    if (type === "etanol") {
        type = 11
    }
    litros = type / distance;
    return litros;
}

module.exports = {calcGas, calcEtanol}
