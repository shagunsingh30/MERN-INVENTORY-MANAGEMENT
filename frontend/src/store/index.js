import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/root.saga.js";
import ProductReducer from "./reducers/product.reducer.js";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  products: ProductReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    sagaMiddleware,
  ],
});
sagaMiddleware.run(rootSaga);

export default store;
