import { useReducer } from 'react';
import { addCategory, removeCategory } from '../../actions/products';
import { productsReducer } from '../../reducers/productsReducer';

export const useFilterProducts = () => {
  const [state, dispatch] = useReducer(productsReducer, {});

  const handleAddCategory = (id, products) => {
    dispatch(addCategory(id, products));
  };

  const handleDeleteCategory = (id) => {
    dispatch(removeCategory(id));
  };

  return {
    state,
    handleAddCategory,
    handleDeleteCategory,
  };
};
