import React from 'react';
import { filterCategories } from '../../utils/selectors/filterCategories';
import { Category } from './Category.component';
import { Categories } from './CategorySidebar.style';

export const CategorySidebar = () => {
  const categories = filterCategories();
  return (
    <Categories data-testid="products">
      Category
      {categories.map((category) => (
        <Category key={category.id} id={category.id} name={category.name} />
      ))}
    </Categories>
  );
};
