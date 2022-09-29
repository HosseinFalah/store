import { ADD_ITEM_WISHLIST } from "../types"

export const wishlistAction = (item) => (dispatch, getState) => {
    dispatch({type: ADD_ITEM_WISHLIST, paylod: item});

    localStorage.setItem("wishlist", JSON.stringify(getState().wishlist.wishlist))
}