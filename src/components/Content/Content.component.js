import React from 'react';
import { ContentMain, ViewProducts } from './Content.style';
import { GridCategories } from '../GridCategories/GridCategories.component';
import { GridProducts } from '../GridProducts/GridProducts.component';
import { Slider } from '../Slider/Slider.component';
export const Content = ({ setProducts }) => {
  const isProducts = false;
  const handlePage = () => {
    setProducts(!isProducts);
  };
  return (
    <ContentMain>
      <Slider />
      <GridCategories />
      <GridProducts />
      <ViewProducts data-testid="products-button" onClick={handlePage}>
        View all products
      </ViewProducts>
    </ContentMain>
  );
};
