import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useParams } from "react-router";
import { useProductDetail } from "../../utils/hooks/useProductDetail";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation"

const ImageContainer = styled.div`
    .mySwiper {
        width:30%;
    }

    img {
        display: block;
        width: 100%;
        height: auto;
    }
`
const ProductContainer = styled.div`
    border: solid 1px #DDD;
    background-color: #DDD;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);

    .product-grid {
        &-title {
            display: block;
            background-color: cyan;
            padding: 8px 16px;
            text-transform: uppercase;
        }
        &-info {
            font-size: 12px;
            padding: 12px;
        }
        &-type {
            text-transform: uppercase;

        }
        &-bold {
            font-weight: bold;
        }
        &-action {
            padding: 12px;
            column-gap: 5px;
        }
    }
`

const ProductDetail = parms => {
    const { productId } = useParams();
    const { data } = useProductDetail(productId);
    const [ product, setProduct ] = useState([]);

    useEffect(() => {
        if (data.results_size > 0) {
            setProduct(data.results[0]);   
        }
    }, [data]);
 
    if ( !product.data ){
        return null;
    }

    return (
        <>
        <ImageContainer>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                { product.data.images.map((image, index) => {
                    return (
                        <SwiperSlide key={index}><img src={image.image.url} alt=""/></SwiperSlide>
                    );
                })}
            </Swiper>
        </ImageContainer>
        <ProductContainer>
            <span className="product-grid-title">{product.data.name}</span>
            <div className="product-grid-info">
            <span className="product-grid-bold">${product.data.price}</span>
            <div className="product-grid-bold">{product.data.sku}</div>
            <div>{product.data.category.slug}</div>
            { product.tags.map((tag, index) => {
                return (
                    <span key={index}>{tag}-</span>
                );
            })}
            <p>
            { product.data.description.map((des, index) => {
                return (
                    <span key={index}>{des.text}</span>
                );
            })}
            </p>
            { product.data.specs.map((spec, index) => {
                return (
                    <div key={index}>
                    <span className="product-grid-bold">{spec.spec_name}</span>: <span className="product-grid-type">{spec.spec_value}</span>
                    </div>
                );
            })}
            </div>
            <div className="product-grid-action">
                <label>  Qty: </label>
                <input type="number" min="1" max="100"></input>
                <button>Add to car</button>
            </div>
        </ProductContainer>
        </>
    );
};

export default ProductDetail;