import { types } from '../types/types';

export const productsReducer = (state = {}, action) => {
  switch (action.type) {
    case types.addCategory:
      return {
        ...state,
        [action.payload.id]: action.payload.products.filter(
          (product) => product.categoryId === action.payload.id
        ),
      };
    case types.removeCategory:
      delete state[action.payload.id];
      return { ...state };
    default:
      console.log(state);
      return state;
  }
};
