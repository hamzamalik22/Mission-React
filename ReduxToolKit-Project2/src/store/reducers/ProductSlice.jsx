import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const ProductSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    deleteProducts: (state, action) => {
      state.products.splice(action.payload, 1);
    },
  },
});

export default ProductSlice.reducer;

export const { getProducts, deleteProducts } = ProductSlice.actions;
