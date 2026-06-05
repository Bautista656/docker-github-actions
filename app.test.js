const saludar = require("./app");

test("Debe regresar un saludo correcto", () => {
    expect(saludar("Brando")).toBe("Hola, Brando. Docker está funcionando correctamente.");
});