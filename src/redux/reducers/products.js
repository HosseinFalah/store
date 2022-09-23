import { RECEIVE_PRODUCTSLIST_ERROR, RECEIVE_PRODUCTSLIST_RESPONSE, RECEIVE_PRODUCT_DETAILS_ERROR, RECEIVE_PRODUCT_DETAILS_RESPONSE, SEARCH_PRODUCTS_REQUEST, SEND_PRODUCTSLIST_REQUEST, SEND_PRODUCT_DETAILS_REQUEST } from "../types";

const ProductsInitiale = {
    loading: false,
    products: [],
    error: ""
}

const ProductInitiale = {
    loading: false,
    products: [],
    error: ""
}

const SearchProductsInitiale = {
    pages: [],
    products: [],
}

const ProductsListReducer = (state = ProductsInitiale, action) => {
    switch (action.type) {
        case SEND_PRODUCTSLIST_REQUEST:
            return { ...state, loading: true}
        case RECEIVE_PRODUCTSLIST_RESPONSE: 
            return { loading: false, products: action.payload, error: ""}
        case RECEIVE_PRODUCTSLIST_ERROR:
            return { loading: false, products: [], error: action.payload}
        default:
            return state
    }
}

const ProductDetailsReducer = (state = ProductInitiale, action) => {
    switch (action.type) {
        case SEND_PRODUCT_DETAILS_REQUEST:
            return { ...state, loading: true }
        case RECEIVE_PRODUCT_DETAILS_RESPONSE:
            return { loading: false, product: action.payload, error: "" }
        case RECEIVE_PRODUCT_DETAILS_ERROR:
            return { loading: false, product: [], error: action.payload }
        default: 
            return state;
    }
}

const SearchProductsReducer = (state = SearchProductsInitiale, action) => {
    switch (action.type) {
        case SEARCH_PRODUCTS_REQUEST:
            const search = action.payload.search;
            const pages = action.payload.pages;
            const products = action.payload.products;

            const filteredPages = pages.filter(page => page.name.toLowerCase().includes(search.toLowerCase()));

            const filteredProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));

            return { pages: filteredPages, products: filteredProducts };
        default:
            return state;
    }
}

export { ProductDetailsReducer, ProductsListReducer, SearchProductsReducer };