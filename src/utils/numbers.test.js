import { sum, rest, mult, div, getRandom } from "./numbers";

describe("set pruebas numbers", () => {
  test("prueba funcionn suma", () => {
    expect(sum(8, 2)).toBe(10);
  });

  test("prueba funcionn resta", () => {
    expect(rest(3, 4)).toBe(-1);
  });

  test("prueba funcionn mult", () => {
    expect(mult(2, 6)).toBe(12);
  });

  test("prueba funcionn div", () => {
    expect(div(8, 2)).toBe(4);
  });

  test("prueba funcionn random", () => {
    const random = getRandom(5, 10);
    expect(random).toBeGreaterThanOrEqual(5);
    expect(random).toBeLessThanOrEqual(10);
    expect(random).not.toBeLessThan(5);
    expect(random).not.toBeGreaterThan(10);
  });
});
