import { LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/type";

const initialState = {
  isAuthenticated: [],
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case LOGIN_FAIL:
    default:
      return state;
  }
};
