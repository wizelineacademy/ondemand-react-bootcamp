import { results } from '../../mocks/en-us/productCategories.json';

export const filterByCategory = (id) => {
  const category = results.filter((category) => category.id === id);
  return category.length > 0 ? category[0].data.name : 'Generic';
};
