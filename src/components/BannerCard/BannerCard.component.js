import React from 'react';
import {
  Banner,
  BannerImage,
  Description,
  Information,
  Title,
} from './BannerCard.style';

export const BannerCard = ({ text, height, url, alt, title }) => {
  return (
    <Banner>
      <BannerImage src={url} height={height / 2} width={570} alt={alt} />
      <Information>
        <Title>{title}</Title>
        <Description>{text}</Description>
      </Information>
    </Banner>
  );
};
