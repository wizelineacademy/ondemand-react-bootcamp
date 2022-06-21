import React, { useState } from 'react';
import { addCategory, removeCategory } from '../../actions/products';
import { finishLoading, startLoading } from '../../actions/ui';
import { useProductsContext } from '../../providers/Products.provider';
import { filterProducts } from '../../utils/selectors/filterProducts';
import { CategoryActive, CategoryNotActive } from './CategorySidebar.style';

export const Category = ({ id, name }) => {
  const [active, setActive] = useState(false);
  const { dispatch, uiDispatch } = useProductsContext();
  const products = filterProducts();

  const handleAdd = () => {
    setActive((prev) => !prev);
    uiDispatch(startLoading());
    setTimeout(() => {
      uiDispatch(finishLoading());
      dispatch(addCategory(id, products));
    }, 2000);
  };

  const handleRemove = () => {
    dispatch(removeCategory(id));
    uiDispatch(finishLoading());
    setActive((prev) => !prev);
  };
  return active ? (
    <CategoryActive onClick={handleRemove}>{name}</CategoryActive>
  ) : (
    <CategoryNotActive onClick={handleAdd}>{name}</CategoryNotActive>
  );
};
