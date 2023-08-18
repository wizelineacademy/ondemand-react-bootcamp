import React, {useEffect} from "react";
import styled from "@emotion/styled";
import productJson from "../../data/featured-products.json"
import Product from "./Product";

const Grid = styled.div`
  margin: 16px auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 8px;
  row-gap: 8px;
  width: 100%;
`;

const Products = props => {
    const products = productJson.results;
    
    useEffect(() => {
        console.log(productJson.results);
    }, []);
    
    return (
        <Grid>
            {products.map((prod, index) => {
                console.log(index);
                return (
                    <Product key={index} prod={prod}></Product>
                );
            })}
        </Grid>
    );
};

export default Products;