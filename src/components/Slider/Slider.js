import React from 'react'
import './slider.css';
import {useFeaturedBanners} from '../../utils/hooks/useFeaturedBanners';

const Slider = () => {
  const { data, isLoading } = useFeaturedBanners();
  return (
    <div className="slider">
      <div className="slider-items">
        {isLoading && <div>Loading...</div>}
        {data.results && data.results.map((row) => {
          return (
            <div key={row.id} className="slider-item">
              <img src={row.data.main_image.url} alt={row.data.main_image.alt}></img>
            </div>
          );
        })}
        </div>
    </div>
  );
};

export default Slider;