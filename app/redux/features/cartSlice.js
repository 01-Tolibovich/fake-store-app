import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: []
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
    }
  }
})

export const { cartList } = cartSlice.actions;
export default cartSlice.reducer;