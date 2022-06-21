import { types } from '../types/types';

export const addCategory = (id, products) => ({
  type: types.addCategory,
  payload: { id, products },
});

export const removeCategory = (id) => ({
  type: types.removeCategory,
  payload: { id },
});
