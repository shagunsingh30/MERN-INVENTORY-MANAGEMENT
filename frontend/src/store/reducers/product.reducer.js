import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      id: 1,
      name: "Product 1",
      price: "$20",
      image: "https://picsum.photos/200",
    },
    {
      id: 2,
      name: "Product 2",
      price: "$30",
      image: "https://picsum.photos/200",
    },
    {
      id: 3,
      name: "Product 3",
      price: "$40",
      image: "https://picsum.photos/200",
    },
    {
      id: 4,
      name: "Product 4",
      price: "$50",
      image: "https://picsum.photos/200",
    },
    {
      id: 5,
      name: "Product 5",
      price: "$60",
      image: "https://picsum.photos/200",
    },
  ],
  currProduct: {},
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProducts: () => {},
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCurrentProduct: (state, action) => {
      state.currProduct = action.payload;
    },
  },
});

export const {fetchProducts,setCurrentProduct,setProducts} = productSlice.actions;

export default productSlice.reducer;
