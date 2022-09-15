import axios from "axios";
import { RECEIVE_PRODUCTSLIST_ERROR, RECEIVE_PRODUCTSLIST_RESPONSE, SEND_PRODUCTSLIST_REQUEST } from "../types"

export const sendProductsRequest = () => async (dispatch) => {
    try{
        dispatch({type: SEND_PRODUCTSLIST_REQUEST});
        
        const { data } = await axios.get("http://localhost:8000/api/products");

        dispatch({type: RECEIVE_PRODUCTSLIST_RESPONSE, payload: data});

    } catch (error) {
        dispatch({type: RECEIVE_PRODUCTSLIST_ERROR, payload: error});
    }
};