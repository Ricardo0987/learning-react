import { UPDATE_NAME } from "../actions/userActions";

const initialState = {
  name: "ricardo",
  country: "Mexico"
};
function userReducer(state = initialState, action) {
  console.log("userReducer - action", action);
  switch (action.type) {
    case UPDATE_NAME:
      // debugger
      return {
        ...state,
        name: action.payload.name
      };
    default:
      return state;
  }
}
export default userReducer;
