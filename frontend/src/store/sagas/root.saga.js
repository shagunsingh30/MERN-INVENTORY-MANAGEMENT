import { all, takeEvery } from "redux-saga/effects";
import {
  CreateProductSaga,
  DeleteProductSaga,
  GetProductsSaga,
  UpdateProductSaga,
} from "./products.saga";
import {
  createProduct,
  DeleteProduct,
  fetchProducts,
  UpdateProductAction,
} from "../reducers/product.reducer.js";

export function* rootSaga() {
  yield all([
    takeEvery(fetchProducts, GetProductsSaga),
    takeEvery(createProduct, CreateProductSaga),
    takeEvery(UpdateProductAction, UpdateProductSaga),
    takeEvery(DeleteProduct, DeleteProductSaga),
  ]);
}
