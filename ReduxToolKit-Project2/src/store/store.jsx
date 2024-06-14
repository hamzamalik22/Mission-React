import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./reducers/UserReducer";
import ProductReducer from "./reducers/ProductSlice";

export const store = configureStore({
  reducer: {
    UserReducer: UserReducer,
    ProductReducer: ProductReducer,
  },
});
