import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_UPDATE_ITEM } from "../types"

export const addToCartAction = (item) => async (dispatch, getState) => {
    dispatch({type: CART_ADD_ITEM, paylod: {...item, totalPrice: item.price * item.quantity}});
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}

export const updateCartItemAction = (item) => async (dispatch, getState) => {
    dispatch({type: CART_UPDATE_ITEM, paylod: item});
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}

export const removeCartAction = (id, color, category) => async (dispatch, getState) => {
    dispatch({type: CART_REMOVE_ITEM, paylod: { id, color, category}});
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}