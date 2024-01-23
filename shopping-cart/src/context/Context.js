import { faker } from "@faker-js/faker";
import { createContext, useContext, useReducer } from "react";
faker.seed();

const Cart = createContext();

const Context = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price().split(".")[0], // 15.00 => [15,00]
    image: faker.image.url(),
    inStock: faker.helpers.arrayElement([0, 2, 4, 6, 7, 9]),
    quickDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    quickDelivery: false,
    byRating: 0,
    searchQuery: "",
  });
  return <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};
export default Context;
