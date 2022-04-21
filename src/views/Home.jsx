import React from 'react';
import Slider from "react-slick";
import sliderData from '../mocks/en-us/featured-banners.json';
import productCategoriesData from '../mocks/en-us/product-categories.json';
import productsData from '../mocks/en-us/featured-products.json';
import { sliderBannersSettings, sliderProductsSettings } from '../utils/constants.js';
import Product from '../components/Product';

function Home() {
    const sliderLayoutItems = sliderData.results.map((item) => {
        return (
            <div key={item.id}>
                <img src={item.data.main_image.url} alt={item.data.main_image.alt} className="wz-slider-item-image"/>
                <h3 className="wz-center">{item.data.title}</h3>
            </div>
        )
    });

    const productSliderItems = productCategoriesData.results.map((item) => {
        return (
            <div key={item.id}>
                <img src={item.data.main_image.url} alt={item.data.main_image.alt} className="wz-slider-product-item-image"/>
                <h3 className="wz-center">{item.data.name}</h3>
            </div>
        )
    });

    const productsDataItems = productsData.results.map((item) => {
        return (
            <Product itemData={item} key={item.id} />
        );
    });

    return (
        <section className="wz-home">
            <Slider {...sliderBannersSettings}>
                {sliderLayoutItems}
            </Slider>

            <Slider {...sliderProductsSettings}>
                {productSliderItems}
            </Slider>
            <h2 className="wz-title">Featured products</h2>
            <div className="wz-container" key="products-container">
                {productsDataItems}
            </div>
            
        </section>
    );
}

export default Home;