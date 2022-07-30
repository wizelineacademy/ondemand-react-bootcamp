import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilter } from '../../actions/categories';
import { clearFilteredProducts } from '../../actions/products';
import Category from './Category.component';
import { Categories, Filter } from './CategorySidebar.style';

const CategorySidebar = () => {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const { filteredProducts } = useSelector((state) => state.products);

  const handleFilter = () => {
    dispatch(clearFilter());
    dispatch(clearFilteredProducts());
  };
  return (
    <Categories>
      Category
      {categories.map((category) => (
        <Category
          key={category.id}
          id={category.id}
          category={category.name}
          isActive={category.isActive}
        />
      ))}
      {Object.keys(filteredProducts).flat().length === 0 ? (
        ''
      ) : (
        <Filter onClick={handleFilter}>Clear filter</Filter>
      )}
    </Categories>
  );
};

export default CategorySidebar;
