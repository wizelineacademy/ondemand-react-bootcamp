import React from 'react';
import { filterByCategory } from '../../utils/selectors/filterBycategory';
import {
  PriceSection,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductSection,
  ProductText,
} from './ProductCard.style';

export const ProductCard = ({
  categoryId,
  imageUrl,
  imageAlt,
  name,
  text,
  price,
}) => {
  const category = filterByCategory(categoryId);

  return (
    <ProductSection>
      <ProductImage src={imageUrl} width={208} height={308} alt={imageAlt} />
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <div>{category}</div>
        <ProductText>{text}</ProductText>
        <PriceSection>
          <ProductPrice>${price}</ProductPrice>
        </PriceSection>
      </ProductInfo>
    </ProductSection>
  );
};
