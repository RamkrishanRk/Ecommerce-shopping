import { ADD_CART, RMV_CART } from "../actions/type";

const initialState = {
  carts: [],
};
export const cartreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        carts: [...state.carts, action.payload],
      };
    case RMV_CART:
      const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data,
      };
    default:
      return state;
  }
};
