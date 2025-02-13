import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const newCar = action.payload;
      const existingCar = state.cartItems.find((car) => car._id === newCar._id);

      if (existingCar) {
        existingCar.quantity += 1;
      } else {
        state.cartItems.push({
          ...newCar,
          quantity: 1, // Ensure a new car starts with quantity 1
        });
      }
      state.totalQuantity += 1;
      state.totalPrice += newCar.price;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingCar = state.cartItems.find((car) => car._id === id);

      if (existingCar) {
        state.totalQuantity -= existingCar.quantity;
        state.totalPrice -= existingCar.price * existingCar.quantity;
        // Remove the car if quantity is 1 or less
        state.cartItems = state.cartItems.filter((car) => car._id !== id);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
