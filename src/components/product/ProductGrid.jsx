import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import productJson from "../../data/featured-products.json"
import Product from "./Product";

const Grid = styled.div`
  margin: 16px auto;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 8px;
  row-gap: 8px;
`;

const Products = ({ categoriesFilter }) => {
    const allProducts = productJson.results;
    const [ products, setProducts ] = useState(allProducts);

    useEffect(() => {
        if (categoriesFilter && categoriesFilter.length > 0) {
            setProducts(allProducts.filter(product => categoriesFilter.includes( product.data.category.slug)));
        } else {
            setProducts(allProducts);
        }
    }, [allProducts, categoriesFilter]);
    
    if ( !products ) return null;

    return (
        <Grid>
            {products.map((prod, index) => {
                return (
                    <Product key={index} prod={prod}></Product>
                );
            })}
        </Grid>
    );
};

export default Products;