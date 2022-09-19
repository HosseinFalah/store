import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import { ProductDetailsReducer, ProductsListReducer } from "./reducers/products";

const reducer = combineReducers({
    productsList: ProductsListReducer,
    productDetails: ProductDetailsReducer
})

const middleware = [thunk]

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;