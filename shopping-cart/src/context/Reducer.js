export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
      break;
    case "REMOVE_FROM_CART":
      console.log("remove to cart");
      break;
    default:
      return state;
      break;
  }
};

export const productReducer = (state, action) => {
  // switch(action.type){
  //   case "SORT_BY_PRICE":
  //     break;
  // }
};
