import { RECEIVE_PRODUCTSLIST_ERROR, RECEIVE_PRODUCTSLIST_RESPONSE, SEND_PRODUCTSLIST_REQUEST } from "../types";

const ProductsInitiale = {
    loading: false,
    products: [],
    error: ""
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

export default ProductsListReducer;