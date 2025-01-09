import { call, put } from "redux-saga/effects";
import {
  createProductFailure,
  createProductSuccess,
  setProducts,
  UpdateProductFailure,
  UpdateProductSuccess,
} from "../reducers/product.reducer.js";
import { toastFailure, toastSuccess } from "../../components/toast.jsx";

export function* GetProductsSaga() {
  try {
    const response = yield call(getProducts);
    if (response?.success) yield put(setProducts(response.data));
    else toastFailure("Error in get products saga");
  } catch (error) {
    toastFailure("Error in get products saga");
    console.log("error in get products saga", error);
  }
}
export function* CreateProductSaga(action) {
  try {
    const { onSuccess, product } = action.payload;
    const response = yield call(createProduct, product);
    if (response?.success) {
      toastSuccess("Product created successfully!");
      onSuccess?.();
      yield put(createProductSuccess(response.data));
    } else toastFailure("Error in create products saga");
  } catch (error) {
    toastFailure("Error in create products saga");
    yield put(createProductFailure(error.message));
    console.log("error in create products saga", error);
  }
}
export function* UpdateProductSaga(action) {
  try {
    const { _id, onSuccess, ...productData } = action.payload;
    const response = yield call(updateProduct, productData, _id);
    if (response?.success) {
      toastSuccess("Product updated successfully!");
      onSuccess?.();
      yield put(UpdateProductSuccess(response.data));
    } else toastFailure("Error in update products saga");
  } catch (error) {
    toastFailure("Error in update products saga");
    yield put(UpdateProductFailure(error.message));
    console.log("error in update products saga", error.message);
  }
}
export function* DeleteProductSaga(action) {
  try {
    const { _id, onSuccess, ...productData } = action.payload;
    const response = yield call(deleteProduct, productData, _id);
    if (response?.success) {
      toastSuccess("Product deleted successfully!");
      onSuccess?.();
      yield put(UpdateProductSuccess(response.data));
    } else toastFailure("Error in delete products saga");
  } catch (error) {
    toastFailure("Error in delete products saga");
    yield put(UpdateProductFailure(error.message));
    console.log("error in delete products saga", error.message);
  }
}
//API HELPER METHODS
const getProducts = async () => {
  const apiUrl =
    import.meta.env.MODE === "production"
      ? "https://stock-nest-back-end.onrender.com/api/products"
      : "/api/products";
  try {
    const response = await fetch(`${apiUrl}`);

    if (!response.ok) {
      // Throw an error for non-2xx status codes
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Parse JSON response
    return data; // Return the parsed data
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Re-throw the error for further handling
  }
};
const createProduct = async (productData) => {
  console.log(productData);
  const apiUrl =
    import.meta.env.MODE === "production"
      ? "https://stock-nest-back-end.onrender.com/api/products"
      : "/api/products";
  try {
    const response = await fetch(`${apiUrl}`, {
      method: "POST", // HTTP method
      headers: {
        "Content-Type": "application/json", // Specify the content type
      },
      body: JSON.stringify(productData), // Convert the data to a JSON string
    });

    if (!response.ok) {
      // Throw an error if the response status is not in the 2xx range
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Parse the JSON response
    return data; // Return the parsed data
  } catch (error) {
    console.error("Error creating product:", error);
    throw error; // Re-throw for further handling
  }
};
const updateProduct = async (productData, productId) => {
  const apiUrl =
    import.meta.env.MODE === "production"
      ? "https://stock-nest-back-end.onrender.com/api/products"
      : "/api/products";
  try {
    const response = await fetch(`${apiUrl}/${productId}`, {
      method: "PUT", // HTTP method
      headers: {
        "Content-Type": "application/json", // Specify the content type
      },
      body: JSON.stringify(productData), // Convert the data to a JSON string
    });

    if (!response.ok) {
      // Throw an error if the response status is not in the 2xx range
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Parse the JSON response
    return data; // Return the parsed data
  } catch (error) {
    console.error("Error updating product:", error);
    throw error; // Re-throw for further handling
  }
};
const deleteProduct = async (productData, productId) => {
  const apiUrl =
    import.meta.env.MODE === "production"
      ? "https://stock-nest-back-end.onrender.com/api/products"
      : "/api/products";
  try {
    const response = await fetch(`${apiUrl}/${productId}`, {
      method: "DELETE", // HTTP method
      headers: {
        "Content-Type": "application/json", // Specify the content type
      },
      body: JSON.stringify(productData), // Convert the data to a JSON string
    });

    if (!response.ok) {
      // Throw an error if the response status is not in the 2xx range
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Parse the JSON response
    return data;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};
