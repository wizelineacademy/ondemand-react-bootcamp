import React from 'react';
import './styles.scss';
import ProductGrid from '../../Components/ProductGrid';
import Slider from '../../Components/Slider';

const Homepage = () => {
  return (
    <div className="Homepage">
      <h1>Slider</h1>
      <Slider />
      <h1>Products</h1>
      <ProductGrid />
    </div>
  );
};

export default Homepage;
