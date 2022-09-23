import { CLEAR_FILTERS_REQUEST, FILTER_BY_BRAND_REQUEST, FILTER_BY_CATEGORY_REQUEST, FILTER_BY_MULTI_RANGE_REQUEST, FILTER_BY_RATING_REQUEST, FILTER_BY_SEARCH_REQUEST, FILTER_BY_STOCK_REQUEST, SORT_BY_PRICE_REQUEST } from "../types"

export const filterMultiRangeAction = (multiRange) => (dispatch) => {
  dispatch({ type: FILTER_BY_MULTI_RANGE_REQUEST, paylod: multiRange })
}

export const filterCategoryAction = (category, checked) => (dispatch) => {
  dispatch({ type: FILTER_BY_CATEGORY_REQUEST, paylod: category, checked })
}

export const filterBrandAction = (brand, checked) => (dispatch) => {
  dispatch({ type: FILTER_BY_BRAND_REQUEST, paylod: brand, checked })
}

export const filterRatingAction = (rating) => (dispatch) => {
  dispatch({ type: FILTER_BY_RATING_REQUEST, paylod: rating })
}

export const filterStockAction = (checked) => (dispatch) => {
  dispatch({ type: FILTER_BY_STOCK_REQUEST, checked })
}

export const filterSearchAction = (search) => (dispatch) => {
  dispatch({ type: FILTER_BY_SEARCH_REQUEST, paylod: search })
}

export const sortPriceAction = (sort) => (dispatch) => {
  dispatch({ type: SORT_BY_PRICE_REQUEST, paylod: sort })
}

export const clearFiltersAction = () => (dispatch) => {
  dispatch({ type: CLEAR_FILTERS_REQUEST })
}

export const sendfilterSelectReducer = () => async (dispatch, getState) => {
  dispatch({
    type: "FILTER_SELECT",
    paylod: {
      products: await getState().productsList.products,
      filter: await getState().filters,
    },
  })
}
