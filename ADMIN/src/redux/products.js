import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload.products;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
