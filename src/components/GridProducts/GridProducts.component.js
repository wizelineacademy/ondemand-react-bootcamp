import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard.component';
import { ProductsContent } from './GridProducts.style';
import { filterProducts } from '../../utils/selectors/filterProducts';

export const GridProducts = ({ products = filterProducts() }) => {
  return (
    <ProductsContent>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          categoryId={product.categoryId}
          images={product.images}
          imageHeight={product.imageHeight}
          imageWidth={product.imageWidth}
          imageUrl={product.imageUrl}
          imageAlt={product.imageAlt}
          name={product.name}
          text={product.text}
          price={product.price}
          stock={product.stock}
        />
      ))}
    </ProductsContent>
  );
};
