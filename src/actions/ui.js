import { types } from '../types/types';

export const startLoadingSlider = () => ({
  type: types.uiStartLoadingSlider,
});

export const finishLoadingSlider = () => ({
  type: types.uiFinishLoadingSlider,
});

export const startLoadingCategories = () => ({
  type: types.uiStartLoadingCategories,
});

export const finishLoadingCategories = () => ({
  type: types.uiFinishLoadingCategories,
});

export const startLoadingProducts = () => ({
  type: types.uiStartLoadingProducts,
});

export const finishLoadingProducts = () => ({
  type: types.uiFinishLoadingProducts,
});

export const startLoadingProduct = () => ({
  type: types.uiStartLoadingProduct,
});

export const finishLoadingProduct = () => ({
  type: types.uiFinishLoadingProduct,
});
