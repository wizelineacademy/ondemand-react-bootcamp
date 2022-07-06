import { types } from '../types/types';

export const setFeaturedProducts = (products) => ({
  type: types.setFeaturedProducts,
  payload: { products },
});

export const setProductsByCategory = (id) => ({
  type: types.setProductsByCategory,
  payload: { id },
});

export const removeProductsByCategory = (id) => ({
  type: types.removeProductsByCategory,
  payload: { id },
});

export const clearFilteredProducts = () => ({
  type: types.clearFilteredProducts,
});

export const setSearchWord = (word) => ({
  type: types.setSearchWord,
  payload: { word },
});
