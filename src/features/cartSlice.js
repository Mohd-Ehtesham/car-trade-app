import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_CAR_PRICE = 1250000; // Set a default price

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
      const existingCar = state.cartItems.find((car) => car.id === newCar.id);
      if (existingCar) {
        existingCar.quantity += 1;
      } else {
        state.cartItems.push(
          Object.assign({
            ...newCar,
            quantity: 1,
            price: DEFAULT_CAR_PRICE,
          })
        );
      }
      state.totalQuantity += 1;
      state.totalPrice += DEFAULT_CAR_PRICE;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingCar = state.cartItems.find((car) => car.id === id);
      if (existingCar) {
        existingCar.quantity -= existingCar.quantity;
        state.totalPrice = DEFAULT_CAR_PRICE * existingCar.quantity;
      } else {
        state.cartItems.filter((car) => car.id !== id);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
