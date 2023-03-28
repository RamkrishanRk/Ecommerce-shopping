import { combineReducers } from "redux";
import { cartReducer } from "./card";
import { authReducer } from "./auth";
import { userReducer } from "./users";

export default combineReducers({
  cartReducer,
  authReducer,
  userReducer,
});
