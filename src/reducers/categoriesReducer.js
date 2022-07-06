import { types } from '../types/types';

const initialState = {
  categories: [],
};
export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setCategories:
      return {
        ...state,
        categories: action.payload.categories,
      };

    case types.activeCategory:
      return {
        ...state,
        categories: state.categories.map((category) => {
          if (category.id === action.payload.id) {
            return {
              ...category,
              isActive: true,
            };
          }
          return category;
        }),
      };

    case types.deactiveCategory:
      console.log(state);
      return {
        ...state,
        categories: state.categories.map((category) => {
          if (category.id === action.payload.id) {
            return {
              ...category,
              isActive: false,
            };
          }
          return category;
        }),
      };

    case types.clearFilterCategories:
      return {
        ...state,
        categories: state.categories.map((category) => {
          return {
            ...category,
            isActive: false,
          };
        }),
      };

    default:
      return state;
  }
};
