import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//reducers
import { cartReducer } from "./reducers/cartReducers";
import {
  getProductsReducer,
  getOneProductReducer,
} from "./reducers/productReducers";

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getOneProduct: getOneProductReducer,
});

//helps to make async requests
const middelware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middelware))
);

export default store;
