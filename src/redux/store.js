import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import ProductsListReducer from "./reducers/products";

const middleware = [thunk]

const store = createStore(ProductsListReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;