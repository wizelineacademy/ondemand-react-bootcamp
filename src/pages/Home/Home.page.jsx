import React from 'react';
import { useSelector } from 'react-redux';
import CentralImage from '../../components/CentralImage/CentralImage.component';
import Content from '../../components/Content/Content.component';
import { useFeaturedProducts } from '../../utils/hooks/useFeaturedProducts';
import { useProducts } from '../../utils/hooks/useProducts';

const Home = () => {
  const { page } = useSelector((state) => state.pages);
  useProducts(page);
  useFeaturedProducts();
  return (
    <>
      <CentralImage />
      <Content />
    </>
  );
};

export default Home;
