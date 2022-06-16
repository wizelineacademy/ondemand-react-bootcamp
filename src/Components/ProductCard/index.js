/* eslint-disable react/prop-types */
import React from 'react';
import './styles.scss';

const ProductCard = (props) => {
  const { name, mainimage } = props;
  return (
    <div className="ProductCard">
      <img src={mainimage.url} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default ProductCard;
