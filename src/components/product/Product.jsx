import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ProductContainer = styled.div`
    border: solid 1px #DDD;
    background-color: #DDD;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);

    img {
        display: block;
        width: 100%;
        height: auto;
    }

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
        &-price {
            font-weight: bold;
        }
        &-action {
            padding: 12px;
            display: flex;
            column-gap: 5px;
        }
    }
`

const Product = props => {
    const prod = props.prod;

    return (
        <ProductContainer>
            <img src={prod.data.mainimage.url} alt="" width={30}></img>
            <span className="product-grid-title">{prod.data.name}</span>
            <div className="product-grid-info">
                <span className="product-grid-type">{prod.data.category.slug}</span>: <span className="product-grid-price">${prod.data.price}</span>
                <div className="product-grid-action">
                    <button>Add to car</button>
                    <Link to={{
                            pathname: `../product/${prod.id}`
                    }}>
                        Details
                    </Link>
                </div>
            </div>
        </ProductContainer>
    );
};

export default Product;