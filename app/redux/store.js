import { configureStore } from "@reduxjs/toolkit";
import counter from "./features/counterSlise";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counterReduser: counter,
    },
  });
};
