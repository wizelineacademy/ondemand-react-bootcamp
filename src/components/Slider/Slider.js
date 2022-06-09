import React from "react";
import "./slider.css";
import { useFeaturedBanners } from "../../utils/hooks/useFeaturedBanners";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const Slider = () => {
  const { data, isLoading } = useFeaturedBanners();
  let items = [];
  if (data.results !== undefined) {
    items = data.results.map((row) => {
      return {
        original: row.data.main_image.url,
        thumbnail: row.data.main_image.url,
      };
    });
  }

  return (
    <div className="slider">
      <div className="slider-items">
        {isLoading && <div>Loading...</div>}
        {items && (
          <ImageGallery
            items={items}
            showFullscreenButton={false}
            showPlayButton={false}
            showNav={false}
            autoPlay={true}
            showBullets={true}
            showThumbnails={false}
          />
        )}
      </div>
    </div>
  );
};

export default Slider;
