import { ADD_CART, RMV_CART, DECREMENT_ITEMS } from "../actions/type";

const initialState = {
  carts: [],
};
export const cartreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      let Items = state.carts.findIndex((el) => el.id == action.payload.id);
      if (Items >= 0) {
        state.carts[Items].qnty += 1;
      } else {
        const data = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, data],
        };
      }

    case RMV_CART:
      const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data,
      };
    case DECREMENT_ITEMS:
      let decrementItems = state.carts.findIndex(
        (el) => el.id == action.payload.id
      );
      if (state.carts[decrementItems].qnty >= 1) {
        const iteams = (state.carts[decrementItems].qnty -= 1);
        console.log([...state.carts, iteams]);
        return {
          ...state,
          carts: [...state.carts],
        };
      }

    default:
      return state;
  }
};
