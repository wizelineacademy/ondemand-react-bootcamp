import { useState, useEfect } from "react";
import CarouselGrid from "../CarouselGrid/CarouselGrid";
import   './ProductInfo.css'

export default function ProductInfo({ products }) {


    const gridData = products.map
        ((data) => {
            return data.srcs.map((image, index) => {
                return {
                    id: index + 1,
                    src: image,
                    alt: data.alt,
                    text: data.text,
                    categoryId: data.categoryId
                };
            })
        });

    return (
        <div style={{ display: 'inline-block' }}>
            <CarouselGrid gridData={gridData} gridName={'Products'} />

        </div>

    );



}