import React from 'react';
import { useDispatch } from 'react-redux';
import { activeCategory, deactiveCategory } from '../../actions/categories';
import {
  removeProductsByCategory,
  setProductsByCategory,
} from '../../actions/products';
import {
  finishLoadingCategories,
  startLoadingCategories,
} from '../../actions/ui';
import { CategoryActive, CategoryNotActive } from './CategorySidebar.style';
import PropTypes from 'prop-types';

const Category = ({ id, category, isActive }) => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(startLoadingCategories());
    dispatch(finishLoadingCategories());
    dispatch(activeCategory(id));
    dispatch(setProductsByCategory(id));
  };

  const handleRemove = () => {
    dispatch(deactiveCategory(id));
    dispatch(removeProductsByCategory(id));
  };
  return isActive ? (
    <CategoryActive
      data-testid="category-sidebar-active"
      onClick={handleRemove}
    >
      {category}
    </CategoryActive>
  ) : (
    <CategoryNotActive data-testid="category-sidebar" onClick={handleAdd}>
      {category}
    </CategoryNotActive>
  );
};

Category.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
  isActive: PropTypes.bool,
  alt: PropTypes.string,
};

export default Category;
