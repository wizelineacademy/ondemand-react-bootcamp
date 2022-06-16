import React, { useState } from "react";
import { Banners } from "../mocks/featured-banners";
import "../styles/css/Slider.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const length = Banners.results.length - 1;

  const nextSlide = () => {
    if (slideIndex < length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === length) {
      setSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (slideIndex >= 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(length);
    }
  };

  return (
    <>
      <div className="slide-container">
        {Banners.results.map((item, itemIndex) => {
          if (itemIndex === slideIndex) {
            console.log("Item Index - ", itemIndex)
            //si el itemIndex es igual al slideIndex
            return (
              <div key={item.id} className="slide">
                <img
                  src={item.data.main_image.url}
                  alt={item.data.main_image.alt}
                />
              </div>
            );
          }
          return "";
        })}
        <BtnSlider direction="left" movement={prevSlide}></BtnSlider>
        <BtnSlider direction="rigth" movement={nextSlide}></BtnSlider>
      </div>
    </>
  );
}

function BtnSlider({ direction, movement }) {
  return (
    <div className="btn-slide">
      <button
        onClick={movement}
        className={direction === "left" ? "slide-prev" : "slide-next"}
      >
        <FontAwesomeIcon
          icon={direction === "left" ? faArrowLeft : faArrowRight}
          size="2x"
        />
      </button>
    </div>
  );
}

export default Slider;
