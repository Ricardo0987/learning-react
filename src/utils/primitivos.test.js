const getValue = exp => {
  switch (exp) {
    case "definido":
      return {};
    case "indefinido":
      return null;
    case "verdadero":
      return true;
    case "falso":
      return false;

    default:
      return null;
  }
};

describe("null undefined o boll", () => {
  test("validar si existe un valor", () => {
    expect(getValue("definido")).toBeDefined();
  });
  test("validar si es nullo", () => {
    expect(getValue()).toBeNull();
  });
  test("validar si verdadero", () => {
    expect(getValue("verdadero")).toBeTruthy();
  });
  test("validar si verdadero", () => {
    expect(getValue("false")).toBeFalsy();
  });
  test("validar si verdadero", () => {
    expect(NaN).toBeNaN();
  });
});
