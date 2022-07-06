import { types } from '../types/types';

export const setProduct = (product) => ({
  type: types.setProduct,
  payload: product,
});

export const setImagesProduct = (images) => ({
  type: types.setImagesProduct,
  payload: images,
});

export const addToCart = (id, product, quantity) => ({
  type: types.addToCart,
  payload: { id, product, quantity },
});

export const calculateTotalCart = () => ({
  type: types.calculateTotalCart,
});

export const calculateTotalProducts = () => ({
  type: types.calculateTotalProducts,
});

export const changeNumberProducts = (id, quantity) => ({
  type: types.changeNumberProductsCart,
  payload: { id, quantity },
});

export const deleteProduct = (id) => ({
  type: types.deleteProduct,
  payload: id,
});
