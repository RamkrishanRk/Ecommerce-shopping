import { ADD_CART, RMV_CART } from "./type";

export const Add_Card = (item) => {
  return {
    type: ADD_CART,
    payload: item,
  };
};

export const DLT = (id) => {
  return {
    type: RMV_CART,
    payload: id,
  };
};
