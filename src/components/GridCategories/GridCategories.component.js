import React from 'react';
import { CategoryCard } from '../CategoryCard/CategoryCard.component';
import { CategorySection } from './GridCategories.style';
import { filterCategories } from '../../utils/selectors/filterCategories';

export const GridCategories = () => {
  const categories = filterCategories();
  return (
    <CategorySection>
      {categories.map((category) => (
        <CategoryCard
          key={category.id}
          name={category.name}
          url={category.imageUrl}
          alt={category.imageAlt}
        />
      ))}
    </CategorySection>
  );
};
