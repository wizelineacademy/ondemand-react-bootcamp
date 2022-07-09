import { types } from '../types/types';

const initialState = {
  featuredProducts: [],
  filteredProducts: {},
  searchTerm: '',
};
export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setFeaturedProducts:
      return {
        ...state,
        featuredProducts: action.payload.products,
      };

    case types.setProductsByCategory:
      return {
        ...state,
        filteredProducts: {
          ...state.filteredProducts,
          [action.payload.id]: state.featuredProducts.filter(
            (product) => product.categoryId === action.payload.id
          ),
        },
      };

    case types.removeProductsByCategory:
      delete state.filteredProducts[action.payload.id];
      return { ...state };

    case types.clearFilteredProducts:
      return {
        ...state,
        filteredProducts: {},
      };

    case types.setSearchWord:
      return {
        ...state,
        searchTerm: action.payload.word,
      };

    default:
      return state;
  }
};
