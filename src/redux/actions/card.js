import { ADD_CART, RMV_CART, DECREMENT_ITEMS } from "./type";

export const Add_Card = (item) => {
  return {
    type: ADD_CART,
    payload: item,
  };
};

export const DeleteItems = (id) => {
  return {
    type: RMV_CART,
    payload: id,
  };
};

export const DecrementItems = (data) => {
  return {
    type: DECREMENT_ITEMS,
    payload: data,
  };
};
