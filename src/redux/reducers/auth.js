import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "../actions/type";

const initialState = {
  isAuthenticated: [],
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case LOGIN_FAIL:
      return { ...state, error: action.error };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case SIGNUP_FAIL:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
