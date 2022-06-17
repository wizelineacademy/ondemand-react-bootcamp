import React from 'react';
import { ContentMain } from './Content.style';
import { GridCategories } from '../GridCategories/GridCategories.component';
import { GridProducts } from '../GridProducts/GridProducts.component';
import { Slider } from '../Slider/Slider.component';
export const Content = () => {
  return (
    <ContentMain>
      <Slider />
      <GridCategories />
      <GridProducts />
    </ContentMain>
  );
};
