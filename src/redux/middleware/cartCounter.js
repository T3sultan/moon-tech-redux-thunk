import { ADD_TO_CART } from "../actionTypes/actionTypes";

const cartCounter = (store) => (next) => (action) => {
  // console.log("Current State", store.getState());
  // console.log("Action", action);
  const state = store.getState();
  // console.log(state.product.cart);
  const cart = state.product.cart;

  if (action.type === ADD_TO_CART) {
    const newAction = {
      ...action,
      payload: { ...action.payload, cartPosition: cart.length },
    };
    return next(newAction);
  }
  return next(action);
};
export default cartCounter;
