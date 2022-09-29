import { ADD_ITEM_WISHLIST } from "../types";

export const wishlistReducer = (state = { wishlist: [] }, action) => {
    switch (action.type) {
        case ADD_ITEM_WISHLIST:
            const item = action.paylod;
            const existingItem = state.wishlist.find(i => i.id === item.id);

            if (existingItem) {
                return { ...state, wishlist: state.wishlist.filter((i) => i.id !== existingItem.id) }
            } else {
                return { ...state, wishlist: [...state.wishlist, item] }
            }
        default:
            return state;
    }
}