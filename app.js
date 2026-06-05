function saludar(nombre) {
    return `Hola, ${nombre}. Docker está funcionando correctamente.`;
}

console.log(saludar("Brando"));

module.exports = saludar;