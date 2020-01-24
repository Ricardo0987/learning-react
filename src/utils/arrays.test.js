import { createStore } from "./arrays";

describe("set pruebas arrys", () => {
  test("probar arrays", () => {
    const store = createStore();
    store.addFruits("fresa");
    store.addFruits("pera");
    store.addFruits({ name: "mango", color: "green" });
    // expect(store.getFruits()).toStrictEqual(['fresa','pera']);
    expect(store.getFruits()).toContain("pera");
    expect(store.getFruits()).not.toContain("melon");
    expect(store.getFruits()).toHaveLength(3);
    expect(store.getFruits()).toContainEqual({ name: "mango", color: "green" });
  });
});
