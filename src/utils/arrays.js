export const createStore = () => {
  let fruits = [];

  return {
    addFruits: fruit => {
      fruits.push(fruit);
    },
    getFruits: () => {
      return fruits;
    }
  };
};
