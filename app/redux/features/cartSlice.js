import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartPositions: {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    cartList(state, action) {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    },
    getCartPositions(state, action) {
      state.cartPositions = { ...state.cartPositions, ...action.payload };
    },
  },
});

export const { cartList, getCartPositions } = cartSlice.actions;
export default cartSlice.reducer;
