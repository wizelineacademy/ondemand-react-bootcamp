import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import cat from '../../assets/cat.jpeg';
import './Gallery.style.js';
import {
  Back,
  GalleryArrows,
  GalleryContainer,
  Next,
} from './Gallery.style.js';

const Gallery = () => {
  const { productImages } = useSelector((state) => state.cart);
  const [index, setIndex] = useState(0);
  const handleBack = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (index < productImages.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };
  return (
    <GalleryContainer>
      {productImages.length === 0 ? (
        <img src={cat} alt="" />
      ) : (
        <img src={productImages[index].url} height={200} width={200} alt="" />
      )}
      <GalleryArrows>
        <Back onClick={handleBack}>
          <i className="fa-solid fa-arrow-left"> </i>
          Back
        </Back>
        <Next onClick={handleNext}>
          Next
          <i className="fa-solid fa-arrow-right"> </i>
        </Next>
      </GalleryArrows>
    </GalleryContainer>
  );
};

export default Gallery;
