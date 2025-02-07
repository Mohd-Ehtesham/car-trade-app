import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./features/carSlice";
import cartReducer from "./features/cartSlice";

export const store = configureStore({
  reducer: {
    cars: carReducer,
    cart: cartReducer,
  },
});
