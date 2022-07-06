import React from 'react';
import { useDispatch } from 'react-redux';
import { activeCategory } from '../../actions/categories';
import { setProductsByCategory } from '../../actions/products';
import {
  finishLoadingCategories,
  startLoadingCategories,
} from '../../actions/ui';
import { Category, ImageSection, Title } from './CategoryCard.style';
import PropTypes from 'prop-types';

const CategoryCard = ({ id, name, url, alt }) => {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(startLoadingCategories());
    setTimeout(() => {
      dispatch(finishLoadingCategories());
      dispatch(activeCategory(id));
      dispatch(setProductsByCategory(id));
    }, 2000);
  };

  return (
    <Category onClick={handleAdd} to={`/products/${id}`}>
      <ImageSection src={url} width={400} height={200} alt={alt} />
      <Title>{name}</Title>
    </Category>
  );
};

CategoryCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  url: PropTypes.string,
  alt: PropTypes.string,
};

export default CategoryCard;
