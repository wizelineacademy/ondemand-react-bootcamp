import React from 'react';
import { Slider } from '../Slider/Slider.component';
import { ContentMain } from './Content.style';
import products from '../../mocks/en-us/products.json';
import { GridCategories } from '../GridCategories/GridCategories.component';
import { GridProducts } from '../GridProducts/GridProducts.component';
export const Content = () => {
  console.log(products);
  return (
    <ContentMain>
      <Slider />
      <GridCategories />
      <GridProducts />
    </ContentMain>
  );
};
