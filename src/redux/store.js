import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import { ProductDetailsReducer, ProductsListReducer, SearchProductsReducer } from "./reducers/products";
import { filtersReducer, FilterSelectReducer } from "./reducers/filters";

const reducer = combineReducers({
    productsList: ProductsListReducer,
    filters: filtersReducer,
    filterSelect: FilterSelectReducer,
    productDetails: ProductDetailsReducer,
    searchProducts: SearchProductsReducer
})

const middleware = [thunk]

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;