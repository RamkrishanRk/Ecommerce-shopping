import { combineReducers } from "redux";
import { cartreducer } from "./reducer";
import { authReducer } from "./auth";

export default combineReducers({
  cartreducer,
  authReducer,
});
