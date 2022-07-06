import { types } from '../types/types';

const initialState = {
  page: 1,
  totalPages: 1,
};

export const pagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setPage:
      return {
        ...state,
        page: action.payload,
      };

    case types.setTotalPages:
      return {
        ...state,
        totalPages: action.payload,
      };

    case types.incrementPage:
      return {
        ...state,
        page:
          action.payload < state.totalPages
            ? action.payload + 1
            : action.payload,
      };

    case types.decrementPage:
      return {
        ...state,
        page: action.payload > 1 ? action.payload - 1 : 1,
      };

    default:
      return state;
  }
};
