import { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, productReducer } from "./Reducer";
faker.seed(99);
const Cart = createContext(); // cart is the context we're going to pass across components

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price().split(".")[0], // 12.00 => [12,00]
    image: faker.image.url(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    quickDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));
  // console.log(products);
  // 2 reducer function
  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    quickDelivery: false,
    searchQuery: "",
    byRating: 0,
  });

  return <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>{children}</Cart.Provider>; // Cart context was created using createContext()
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
