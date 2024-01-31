import { createContext, useContext, useReducer } from "react";

const Context = () => {
  // 2 reducer function
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });
};
