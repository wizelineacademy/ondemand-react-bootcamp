import React from "react";
import Banners from "../../banner/BannerSlider";
import CategoryCarousel from "../../category/CategoryCarousel";
import { useNavigate } from "react-router";
import FeaturedProducts from "../../product/FeaturedProductGrid";


const Content = props => {
    const navigate = useNavigate();

    const showAll = () => {
        navigate('../products');
    };

    return (
        <div>
            <Banners></Banners>
            <CategoryCarousel></CategoryCarousel>
            <FeaturedProducts/>
            <button onClick={showAll}>View all products</button>
        </div>
    );
};

export default Content;