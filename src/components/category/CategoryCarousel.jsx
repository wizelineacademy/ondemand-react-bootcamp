import React, { useState, useEffect, useRef, useMemo } from "react";
import CategorySlider from "./CategoryCarousel.styled";
import { useProductCategories } from "../../utils/hooks/useProductCategories";
import { Link } from "react-router-dom";

const CategoryCarousel = props => {
    const [currentIdx, setCurrent] = useState(0);
    const { data } = useProductCategories();
    const [backImage, setBackImage] = useState(null);
    const [frontImage, setFrontImage] = useState(null);
    const [disableNav, setDisableNav] = useState(false);
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        setSlides(data.results && data.results);
    }, [data]);

    const frontContainer = useRef();

    const getParms = (slide) => {
        return `category=${slide.slugs.toString()}`;
    };

    const productSlides = useMemo(() => {
        if (slides) {
            const slidesArr = slides.map((slide) => (
                <div>
                    <img
                        id={slide.id}
                        key={slide.id}
                        src={slide.data.main_image.url}
                        alt={slide.data.main_image.alt}
                        width={200}
                    />
                    <Link to={{
                        pathname: '../products',
                        search: getParms(slide)
                    }}>
                        {slide.data.name}
                    </Link>
                </div>
            ));
        
            setBackImage(slidesArr[0]);
            setFrontImage(slidesArr[1]);
            return slidesArr;
        }
      }, [slides]);

    const nextSlide = () => {
        let newVal = currentIdx === slides.length - 1 ? 0 : currentIdx + 1;
        moveSlide("covering", newVal);
        setCurrent(newVal);
    };

    const prevSlide = () => {
        let newVal = currentIdx === 0 ? slides.length - 1 : currentIdx - 1;
        moveSlide("covering-pre", newVal);
        setCurrent(newVal);
    };

    const resetClassName = (event) => {
        frontContainer.current.className = "child hidden";
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
                    className='child hidden'
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
