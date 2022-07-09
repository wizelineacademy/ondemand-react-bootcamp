import { filterProducts } from './filterProducts';
/*
export const filterByCategory = (id) => {
  const category = results.filter((category) => category.id === id);
  return category.length > 0 ? category[0].data.name : 'Generic';
};*/
export const filterProductByCategory = (id) => {
  return filterProducts().filter((product) => product.categoryId === id);
};
