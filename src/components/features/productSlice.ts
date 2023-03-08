import { createSlice } from "@reduxjs/toolkit";
import type { IProduct } from "../../apis/product";

const initialState = {
  product: {} as IProduct,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { addProduct } = productSlice.actions;

export default productSlice.reducer;