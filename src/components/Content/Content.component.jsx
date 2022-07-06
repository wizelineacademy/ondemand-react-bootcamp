import React from 'react';
import GridCategories from '../GridCategories/GridCategories.component';
import GridProducts from '../GridProducts/GridProducts.component';
import { ContentMain, ViewProducts } from './Content.style';
import Slider from '../Slider/Slider.component';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Loading } from '../../GlobalStyle.style';
const Content = () => {
  const { loadingSlider, loadingCategories, loadingProducts } = useSelector(
    (state) => state.ui
  );

  return (
    <ContentMain>
      {loadingSlider && <Loading>Loading</Loading>}
      <Slider />
      {loadingCategories && <Loading>Loading</Loading>}
      <GridCategories />
      {loadingProducts && <Loading>Loading</Loading>}
      <GridProducts />
      <Link to="/products">
        <ViewProducts data-testid="products-button">
          View all products
        </ViewProducts>
      </Link>
    </ContentMain>
  );
};

export default Content;
