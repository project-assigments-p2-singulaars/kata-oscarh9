// Lanza diferentes operaciones y testea que la calculadora funciona correctamente.

function suma (a, b) {
    return a + b;
}

function resta (a, b) {
    return a - b;
}

function multiplicacion (a, b) {
    return a * b;
}

function division (a, b) {
    if (b === 0) {
        throw new Error('No se puede dividir por cero');
    }
    return a / b;
}

module.exports = {suma}
module.exports = {resta}
module.exports = {multiplicacion}
module.exports = {division}