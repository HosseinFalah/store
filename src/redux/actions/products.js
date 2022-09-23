import axios from "axios";
import { RECEIVE_PRODUCTSLIST_ERROR, RECEIVE_PRODUCTSLIST_RESPONSE, RECEIVE_PRODUCT_DETAILS_ERROR, RECEIVE_PRODUCT_DETAILS_RESPONSE, SEARCH_PRODUCTS_REQUEST, SEND_PRODUCTSLIST_REQUEST, SEND_PRODUCT_DETAILS_REQUEST } from "../types"

export const sendProductsRequest = () => async (dispatch) => {
    try{
        dispatch({type: SEND_PRODUCTSLIST_REQUEST});
        
        const { data } = await axios.get("http://localhost:8000/api/products");

        dispatch({type: RECEIVE_PRODUCTSLIST_RESPONSE, payload: data});

    } catch (error) {
        dispatch({type: RECEIVE_PRODUCTSLIST_ERROR, payload: error});
    }
};

export const sendProductDetailsRequest = (id) => async (dispatch) => {
    try {
        dispatch({type: SEND_PRODUCT_DETAILS_REQUEST});

        const { data } = await axios.get(`http://localhost:8000/api/product/${id}`);

        dispatch({type: RECEIVE_PRODUCT_DETAILS_RESPONSE, payload: data});
    } catch (error) {
        dispatch({type: RECEIVE_PRODUCT_DETAILS_ERROR, payload: error});
    }
}

export const searchProductsRequest = (search, pages, products) => (dispatch) => {
    dispatch({type: SEARCH_PRODUCTS_REQUEST, payload: { search, pages, products }})
}