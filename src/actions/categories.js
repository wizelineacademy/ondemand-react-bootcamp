import { types } from '../types/types';

export const setCategories = (categories) => ({
  type: types.setCategories,
  payload: { categories },
});

export const activeCategory = (id) => ({
  type: types.activeCategory,
  payload: { id },
});

export const deactiveCategory = (id) => ({
  type: types.deactiveCategory,
  payload: { id },
});

export const clearFilter = () => ({
  type: types.clearFilterCategories,
});
