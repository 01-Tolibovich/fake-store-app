import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counterSlise";
import cart from "./features/cartSlice"
import cartPositions from "./features/cartSlice";
import buttonPositionSlice from "./features/buttonPositionSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counterReduser: counter,
      addToCart: cart,
      cartPositions: cartPositions,
      buttonPosition: buttonPositionSlice,
    },
  });
};
