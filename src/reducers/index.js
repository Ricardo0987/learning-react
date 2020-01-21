import { combineReducers } from "redux";
import counter from "./counter";
import user from "./user";

export default combineReducers({
  // contador: counter,  //se puede renombrar
  counter,
  user
});
