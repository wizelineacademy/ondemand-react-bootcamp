import React from 'react';
import ProductCard from '../ProductCard';
import Products from '../../MockData/products.json';
import './styles.scss';

const ProductGrid = () => {
  return (
    <div className="ProductGrid">
      {Products.results.map((product) => (
        <ProductCard key={product.id} {...product.data} />
      ))}
    </div>
  );
};

export default ProductGrid;
