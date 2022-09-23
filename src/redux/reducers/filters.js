import { CLEAR_FILTERS_REQUEST, FILTER_BY_BRAND_REQUEST, FILTER_BY_CATEGORY_REQUEST, FILTER_BY_MULTI_RANGE_REQUEST, FILTER_BY_RATING_REQUEST, FILTER_BY_SEARCH_REQUEST, FILTER_BY_STOCK_REQUEST, SORT_BY_PRICE_REQUEST } from "../types"

const initialFilters = {
  multiRange: 'all',
  category: [],
  brand: [],
  rating: null,
  stock: false,
  sort: 'featured',
  search: '',
}

const initialFilterSelect = {
  filteredProducts: [],
}

export const filtersReducer = (state = initialFilters, action) => {
  switch (action.type) {
    case FILTER_BY_MULTI_RANGE_REQUEST:
      return { ...state, multiRange: action.paylod }

    case FILTER_BY_CATEGORY_REQUEST:
      if (action.checked) {
        return { ...state, category: [...state.category, action.paylod.category] }
      } else {
        const updatedCategory = state.category.filter(
          (item) => item !== action.paylod.category,
        )
        return { ...state, category: updatedCategory }
      }

    case FILTER_BY_BRAND_REQUEST:
      if (action.checked) {
        return { ...state, brand: [...state.brand, action.paylod.brand] }
      } else {
        const updatedBrand = state.brand.filter((item) => item !== action.paylod.brand)
        return { ...state, brand: updatedBrand }
      }

    case FILTER_BY_RATING_REQUEST:
      return { ...state, rating: action.paylod }

    case FILTER_BY_STOCK_REQUEST:
      if (action.checked) {
        return { ...state, stock: true }
      } else {
        return { ...state, stock: false }
      }

    case FILTER_BY_SEARCH_REQUEST:
      return { ...state, search: action.paylod }

    case SORT_BY_PRICE_REQUEST:
      return { ...state, sort: action.paylod }

    case CLEAR_FILTERS_REQUEST:
      return initialFilters

    default:
      return state
  }
}

export const FilterSelectReducer = (state = initialFilterSelect, action) => {
  switch (action.type) {
    case "FILTER_SELECT":
      const { category, brand, stock, sort, search, rating, multiRange } = action.paylod.filter
      let temp = action.paylod.products

      if (category.length > 0) {
        temp = temp.filter((i) => category.includes(i.category))
      }

      if (brand.length > 0) {
        temp = temp.filter((i) => brand.includes(i.brand))
      }

      if (stock) {
        temp = temp.filter((i) => i.inStock)
      }

      if (sort) {
        if (sort === 'lowest') {
          temp.sort((a, b) => a.price - b.price)
        } else if (sort === 'highest') {
          temp.sort((a, b) => b.price - a.price)
        } else {
          temp.sort((a, b) => a.id - b.id)
        }
      }

      if (search) {
        temp = temp.filter((i) => i.name.toLowerCase().includes(search.toLowerCase().trim()))
      }

      if (rating) {
        temp = temp.filter((i) => i.rating === rating)
      }

      switch (multiRange) {
        case 'all':
          temp = [...temp]
          break
        case 'greater-equals-10':
          temp = temp.filter((i) => i.price <= 10)
          break
        case 'between-10-and-100':
          temp = temp.filter((i) => i.price >= 10 && i.price <= 100)
          break
        case 'between-100-and-500':
          temp = temp.filter((i) => i.price >= 100 && i.price <= 500)
          break
        case 'greater-equals-500':
          temp = temp.filter((i) => i.price >= 500)
          break
        default:
          temp = [...temp]
          break
      }

      return { filteredProducts: temp }

    default:
      return state
  }
}
