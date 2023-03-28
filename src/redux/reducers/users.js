import { ADD_USERS, GET_USERS } from "../actions/type";

const initialState = {
  user: [],
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS:
      return { ...state, user: action.payload };
    case GET_USERS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
