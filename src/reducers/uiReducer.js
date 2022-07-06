import { types } from '../types/types';

const initialState = {
  loadingSlider: false,
  loadingCategories: false,
  loadingProducts: false,
  loadingProduct: false,
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.uiStartLoadingSlider:
      return {
        ...state,
        loadingSlider: true,
      };

    case types.uiFinishLoadingSlider:
      return {
        ...state,
        loadingSlider: false,
      };

    case types.uiStartLoadingCategories:
      console.log(state);
      return {
        ...state,
        loadingCategories: true,
      };

    case types.uiFinishLoadingCategories:
      console.log(state);
      return {
        ...state,
        loadingCategories: false,
      };

    case types.uiStartLoadingProducts:
      return {
        ...state,
        loadingProducts: true,
      };

    case types.uiFinishLoadingProducts:
      return {
        ...state,
        loadingProducts: false,
      };

    case types.uiStartLoadingProduct:
      return {
        ...state,
        loadingProducts: true,
      };

    case types.uiFinishLoadingProduct:
      return {
        ...state,
        loadingProducts: false,
      };

    default:
      return state;
  }
};
