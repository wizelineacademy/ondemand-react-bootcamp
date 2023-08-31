import React, {useContext} from "react";
import Banners from "../../banner/BannerSlider";
import CategoryCarousel from "../../category/CategoryCarousel";
import Products from "../../product/ProductGrid";
import AppContext from "../../../AppContext";

const Content = props => {
    const { setShowPage } = useContext(AppContext);

    const showAll = () => {
        setShowPage("ProductList");
    };

    return (
        <div>
            <Banners></Banners>
            <CategoryCarousel></CategoryCarousel>
            <Products></Products>
            <button onClick={showAll}>View all products</button>
        </div>
    );
};

export default Content;