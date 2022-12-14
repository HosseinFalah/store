import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import { ProductDetailsReducer, ProductsListReducer, SearchProductsReducer } from "./reducers/products";
import { filtersReducer, FilterSelectReducer } from "./reducers/filters";
import { cartReducer } from "./reducers/cart";
import { wishlistReducer } from "./reducers/wishlist";

const reducer = combineReducers({
  productsList: ProductsListReducer,
  filters: filtersReducer,
  filterSelect: FilterSelectReducer,
  productDetails: ProductDetailsReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  searchProducts: SearchProductsReducer
})

const cartItemsStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];
const wishlistStorage = localStorage.getItem('wishlist') ? JSON.parse(localStorage.getItem('wishlist')) : [];

const initialeState = {
  cart: { cartItems: cartItemsStorage },
  wishlist: { wishlist: wishlistStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialeState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;