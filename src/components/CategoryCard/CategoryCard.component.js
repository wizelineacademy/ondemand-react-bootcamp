import React from 'react';
import { Category, ImageSection, Title } from './CategoryCard.style';

export const CategoryCard = ({ name, url, alt }) => {
  return (
    <Category>
      <ImageSection src={url} width={400} height={200} alt={alt} />
      <Title>{name}</Title>
    </Category>
  );
};
