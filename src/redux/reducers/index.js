import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userReducer from "./userReducer";

export default combineReducers({
  // contador: counter,  //se puede renombrar
  counter: counterReducer,
  user: userReducer
});
