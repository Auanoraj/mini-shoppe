export const addToCart = (cartData) => (dispatch) => {
  dispatch({
    type: "ADD_TO_CART",
    payload: cartData,
  });
};

export const updateCart = (cartData) => (dispatch) => {
  dispatch({
    type: "UPDATE_CART",
    payload: cartData,
  });
};

export const removeItem = (productId) => (dispatch) => {
  dispatch({
    type: "REMOVE_ITEM",
    payload: productId,
  });
};

export const clearCart = () => (dispatch) => {
  dispatch({
    type: "CLEAR_CART",
  });
};
