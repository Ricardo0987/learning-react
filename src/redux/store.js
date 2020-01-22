import { createStore } from "redux";
import rootReducer from "./reducers/index";

import {compose} from 'redux';
import persistState from 'redux-localstorage'

const enhancer = compose(
  persistState(),
)
const store = createStore(
  rootReducer, enhancer
  // ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
