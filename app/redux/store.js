import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counterSlise";
import cart, { addToCart } from "./features/cartSlice"

export const makeStore = () => {
  return configureStore({
    reducer: {
      counterReduser: counter,
      addToCart: cart,
    },
  });
};
