import * as actionTypes from "./types";

export const addToCart = (id) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id,
    },
  };
};

export const removeFromCart = (id) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id,
    },
  };
};

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART,
    payload: {},
  };
};

export const adjustQty = (id, value) => {
  return {
    type: actionTypes.ADJUST_QTY,
    payload: {
      id,
      qty: value,
    },
  };
};
