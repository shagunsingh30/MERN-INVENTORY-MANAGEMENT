import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  currProduct: {},
  loading: false,
  updateloading: false,
  createloading: false,
  deleteloading: false,
  error: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: (state) => {
      state.loading = true;
    },
    fetchProductsSucess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    fetchProductsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    createProduct: (state) => {
      state.createloading = true;
    },
    createProductSuccess: (state, action) => {
      state.createloading = false;
      state.products = [...state.products, action.payload];
    },
    createProductFailure: (state, action) => {
      state.createloading = false;
      state.error = action.payload;
    },
    UpdateProductAction: (state) => {
      state.updateloading = true;
    },
    UpdateProductSuccess: (state) => {
      state.updateloading = false;
      state.error = {};
    },
    UpdateProductFailure: (state, action) => {
      state.updateloading = false;
      state.error = action.payload;
    },
    DeleteProduct: (state) => {
      state.deleteloading = true;
    },
    DeleteProductSuccess: (state) => {
      state.deleteloading = false;
      state.error = {};
    },
    DeleteProductFailure: (state, action) => {
      state.deleteloading = false;
      state.error = action.payload;
    },
    setCurrentProduct: (state, action) => {
      state.currProduct = action.payload;
    },
  },
});

export const {
  fetchProducts,
  fetchProductsSucess,
  fetchProductsFailure,
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
