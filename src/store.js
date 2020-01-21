import { createStore } from "redux";
import rootReducer from "./reducers/index";
import { INCREMENT, DECREMENT } from "./reducers/counter";

// Creadores de acciones
export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
