import React, { useState, useEffect } from "react";
import categoryJson from "../../data/product-categories.json";
import './CategoryCarousel.css';

const CategoryCarousel = props => {
    const [current, setCurrent] = useState(0);
    const slides = categoryJson.results;
    const length = slides.length;

    useEffect(() => {
        console.log(categoryJson.results);
    }, [slides]);

    const nextSlide = () => {
        document.getElementById(current).className="child covering";
        let newVal = current === length - 1 ? 0 : current + 1;
        document.getElementById(newVal).className="child covered"; 
        setCurrent(newVal);
    };

    const prevSlide = () => {
        document.getElementById(current).className="child covering-pre";
        let newVal = current === 0 ? length - 1 : current - 1;
        document.getElementById(newVal).className="child covered"; 
        setCurrent(newVal);
    };

    return (
        <div>
        <button className="leftArrow" onClick={prevSlide}>previous</button>
        <button className="rightArrow" onClick={nextSlide}>next</button>
        <div className="parent">
        {slides.map((slide, index) => {
            console.log(index);
            return (
                index === 0 ? <img id={index} className="child covered" src={slide.data.main_image.url} alt={slide.data.main_image.alt} width={200}/> : <img id={index} className="child covering" src={slide.data.main_image.url} alt={slide.data.main_image.alt} width={30}/>
            );
        })}
        </div>
        </div>
    );
};

export default CategoryCarousel;
