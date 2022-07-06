import { types } from '../types/types';

export const setPage = (page) => ({
  type: types.setPage,
  payload: page,
});

export const setTotalPages = (totalPages) => ({
  type: types.setTotalPages,
  payload: totalPages,
});

export const incrementPage = (pages) => ({
  type: types.incrementPage,
  payload: pages,
});

export const decrementPage = (pages) => ({
  type: types.decrementPage,
  payload: pages,
});
