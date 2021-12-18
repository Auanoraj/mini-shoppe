const initialState = {
  cartItems: [],
};

export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "UPDATE_CART":
      return {
        ...state,
        cartItems: state.cartItems.map((prod) =>
          prod.id === action.payload.id
            ? {
                ...prod,
                quantity: action.payload.quantity,
                totalPrice: prod.price * action.payload.quantity,
              }
            : prod
        ),
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((prod) => prod.id !== action.payload),
      };
    case "CLEAR_CART":
      return {
        cartItems: [],
      };
    default:
      return state;
  }
}
