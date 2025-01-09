import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  currProduct: {},
  loading: false,
  error: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: () => {},
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    createProduct: (state) => {
      state.loading = true;
    },
    createProductSuccess: (state, action) => {
      state.loading = false;
      state.products = [...state.products, action.payload];
    },
    createProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    UpdateProductAction: (state) => {
      state.loading = true;
    },
    UpdateProductSuccess: (state) => {
      state.loading = false;
      state.error = {};
    },
    UpdateProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    DeleteProduct: (state) => {
      state.loading = true;
    },
    DeleteProductSuccess: (state) => {
      state.loading = false;
      state.error = {};
    },
    DeleteProductFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setCurrentProduct: (state, action) => {
      state.currProduct = action.payload;
    },
  },
});

export const {
  fetchProducts,
  setCurrentProduct,
  setProducts,
  createProduct,
  createProductSuccess,
  createProductFailure,
  UpdateProductAction,
  UpdateProductSuccess,
  UpdateProductFailure,
  DeleteProduct,
  DeleteProductSuccess,
  DeleteProductFailure,
} = productSlice.actions;

export default productSlice.reducer;
