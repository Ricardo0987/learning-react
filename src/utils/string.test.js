import {saluda,getId,despide} from "./strings";

describe("set pruebas string", () => {

  const saludo = saluda("ricardo");
  const id = getId();
  const saludoDespide = despide();

  test("prueba funcionn saluda", () => {
    expect(saludo).toMatch(/hola soy \w+\d/);
  });

  test("prueba funcionn despide", () => {
    expect(saludoDespide).not.toMatch("Bye");
  });

  test("prueba funcion getID", () => {
    expect(id).toMatch(/^\d{2}-\d{3}$/);
  });
});
