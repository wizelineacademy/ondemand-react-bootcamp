import React from 'react';
import home from '../../assets/home.jpeg';
import { MainImage } from './CentralImage.style';

export const CentralImage = () => {
  return <MainImage src={home} height={720} width={1280} alt="home" />;
};
