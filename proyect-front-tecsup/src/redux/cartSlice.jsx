import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("cart")) ?? [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.stock++;
      } else {
        state.push({ ...action.payload, stock: 1 });
      }
    },
    deleteFromCart(state, action) {
      return state.filter((item) => item.id !== action.payload.id);
    },
    incrementQuantity(state, action) {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.stock++;
      }
    },
    decrementQuantity(state, action) {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.stock > 1) {
        item.stock--;
      }
    },
    clearCart() {
      return [];
    },
  },
});

export const {
  addToCart,
  deleteFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
