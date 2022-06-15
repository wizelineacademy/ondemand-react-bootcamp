import React from 'react';
import { Category, ImageSection, Title } from './CategoryCard.style';

export const CategoryCard = ({ name, url, alt }) => {
  return (
    <Category>
      <ImageSection>
        <img src={url} width={400} height={200} alt={alt} />
      </ImageSection>
      <Title>{name}</Title>
    </Category>
  );
};
