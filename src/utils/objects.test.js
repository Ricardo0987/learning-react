import { createStore } from "./objects";

describe("set pruebas objects", () => {
  test("probar objects", () => {
    const store = createStore();
    store.addItem({ name: "ricardo", id: 1, country: "españa" });

    expect(store.getStore()[0]).toEqual({
      name: "ricardo",
      id: 1,
      country: "españa"
    });
  });

  test("buscar item por id", () => {
    const store = createStore();
    store.addItem({ name: "ricardo", id: 1, country: "españa" });

    expect(store.getById(1)).toEqual({
      name: "ricardo",
      id: 1,
      country: "españa"
    });

    expect(store.getById(1)).toMatchObject({
      name: "ricardo"
    });

    expect(store.getById(1)).toHaveProperty("name");

    expect(store.getById(1)).toHaveProperty("name","ricardo");
  });
});
