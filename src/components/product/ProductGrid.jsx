import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import productJson from "../../data/featured-products.json"
import Product from "./Product";

const Div = styled.div`
    margin: auto;
    width: 50%;
    padding: 10px;
`
const Th = styled.th`
    border: 1px solid;
`

const Products = props => {
    const products = productJson.results;
    
    useEffect(() => {
        console.log(productJson.results);
    }, []);
    
    return (
        <Div>
            <table>
                <th></th>
                <Th>Desc</Th>
                <Th>Category</Th>
                <Th>Price</Th>
                <tbody>
            {products.map((prod, index) => {
                console.log(index);
                return (
                    <Product key={index} prod={prod}></Product>
                );
            })}
            </tbody>
            </table>
        </Div>
    );
};

export default Products;