import React, { useState, useEffect, useRef, useMemo } from "react";
import categoryJson from "../../data/product-categories.json";
import CategorySlider from "./CategoryCarousel.styled";

const CategoryCarousel = props => {
    const [currentIdx, setCurrent] = useState(0);
    const [backImage, setBackImage] = useState(null);
    const [frontImage, setFrontImage] = useState(null);
    const [disableNav, setDisableNav] = useState(false);
    const slides = categoryJson.results;
    const length = slides.length;

    const frontContainer = useRef();

    const productSlides = useMemo(() => {
        const slidesArr = slides.map((slide) => (
          <img
            id={slide.id}
            key={slide.id}
            src={slide.data.main_image.url}
            alt={slide.data.main_image.alt}
            width={200}
          />
        ));
    
        setBackImage(slidesArr[0]);
        setFrontImage(slidesArr[1]);
        return slidesArr;
      }, [slides]);

    useEffect(() => {
        console.log(categoryJson.results);
    }, [slides]);

    const nextSlide = () => {
        let newVal = currentIdx === length - 1 ? 0 : currentIdx + 1;
        moveSlide("covering", newVal);
        setCurrent(newVal);
    };

    const prevSlide = () => {
        let newVal = currentIdx === 0 ? length - 1 : currentIdx - 1;
        moveSlide("covering-pre", newVal);
        setCurrent(newVal);
    };

    const resetClassName = (event) => {
        frontContainer.current.className = "child";
        setDisableNav(false);
    };

    const moveSlide = (side, newVal) => {
        setDisableNav(true);
        setBackImage(productSlides[newVal]);
        setFrontImage(productSlides[currentIdx]);
        frontContainer.current.className = `child ${side}`;
    };

    return (
        <CategorySlider>
            <div className='parent'>
                <div
                    className='child'
                    ref={frontContainer}
                    onTransitionEnd={resetClassName}
                >
                    {frontImage}
                </div>
                <div className='child'>{backImage}</div>
            </div>
            <div className='slider-nav'>
                <button className='leftArrow' onClick={prevSlide} disabled={disableNav}>
                    previous
                </button>
                <button
                    className='rightArrow'
                    onClick={nextSlide}
                    disabled={disableNav}
                >
                    next
                </button>
            </div>
        </CategorySlider>
    );
};

export default CategoryCarousel;
