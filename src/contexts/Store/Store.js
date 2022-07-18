import { createContext } from "react";

const Store = createContext({
  cart: [],
  updateCart: () => {},
  getCartItem: () => {},
  getNumOfItems: () => {},
});

export default Store;
