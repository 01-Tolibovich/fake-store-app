import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  cartPositions: [{}]
}

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    cartList(state, action) {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    },
    getCartPositions(state, action) {
      return {
        ...state,
        cartPositions: [...state.cartPositions, action.payload]
      }
    }
  }
})

export const { cartList, getCartPositions } = cartSlice.actions;
export default cartSlice.reducer;