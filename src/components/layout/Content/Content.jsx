import React from "react";
import Banners from "../../banner/BannerSlider";
import CategoryCarousel from "../../category/CategoryCarousel";
import Products from "../../product/ProductGrid";

const Content = props => {
    return (
        <div>
            <Banners></Banners>
            <CategoryCarousel></CategoryCarousel>
            <Products></Products>
        </div>
    );
};

export default Content;